// Cloudflare Worker behind the live preview site.
//   GET /                -> landing page (preview/landing.ts)
//   GET /status          -> GitHub API quota, for the little counter on the page
//   GET /preview?username=<gh user>&type=pet|isocat|graph|langs|badge&theme=dark|light&state=<optional>
//                        -> one SVG, rendered from the user's PUBLIC GitHub data, cached 5 min
// Read-only, nothing is stored. Set a GITHUB_TOKEN secret to lift the 60 req/hr shared quota.

import { LANDING_HTML } from "./landing.ts";
import { fetchEvents, fetchRepos, fetchLanguages, fetchProfile, fetchOpenIssues, probeUsername, checkRateLimit } from "../src/githubApi.ts";
import { decide, applyForceState, greetingFor, ownerHour, isBirthday, lastPushedRepo, isWeekend, season, VALID_STATES } from "../src/state.ts";
import { buildSvg, PALETTES } from "../src/render.ts";
import { buildGraphSvg } from "../src/graphRender.ts";
import { buildIsoSvg } from "../src/isoRender.ts";
import { buildBadgeSvg } from "../src/badgeRender.ts";
import { langsChart } from "../src/charts.ts";

const TYPES = ["pet", "isocat", "graph", "langs", "badge"] as const;
const USER_RE = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,38})$/;
const CACHE_SECONDS = 300;

function svgResponse(body: string, cache: boolean, status = 200): Response {
    return new Response(body, {
        status,
        headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": cache ? `public, max-age=${CACHE_SECONDS}` : "no-store",
        },
    });
}

function errorSvg(msg: string, theme: string): string {
    const pal = PALETTES[theme] ?? PALETTES.dark;
    const text = msg.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    return `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="70" viewBox="0 0 460 70">` +
        `<rect width="460" height="70" rx="10" fill="${pal.bg}" stroke="${pal.ground}"/>` +
        `<text x="16" y="40" font-family="monospace" font-size="13" fill="${pal.text}">${text}</text></svg>`;
}

async function render(username: string, type: string, theme: string, force: string): Promise<Response> {
    const [events, repos, profile] = await Promise.all([fetchEvents(username), fetchRepos(username), fetchProfile(username)]);

    // everything came back empty: find out why instead of drawing a fake-happy pet
    if (!events.length && !repos.length && !profile) {
        const probe = await probeUsername(username);
        if (probe === "not_found") return svgResponse(errorSvg(`no GitHub user called "${username}"`, theme), false);
        const rl = await checkRateLimit();
        if (rl && rl.remaining === 0) return svgResponse(errorSvg("GitHub API quota used up - try again later", theme), false);
    }

    const langs = await fetchLanguages(username, repos);
    const now = new Date();

    if (type === "langs") {
        let note: "limit" | "unavailable" | undefined;
        if (!Object.keys(langs).length) {
            const rl = await checkRateLimit();
            note = rl && rl.remaining === 0 ? "limit" : "unavailable";
        }
        return svgResponse(langsChart(langs, repos.length, PALETTES[theme], note), true);
    }

    // the public preview has no token for GraphQL, so no contribution calendar / PR activity
    const openIssues = type === "badge" ? 0 : await fetchOpenIssues(username);
    let status = decide(events, { lastPush: null, merged24h: 0 }, { failed: false }, now, "", { openIssues, hibernateUntil: "" });
    status = applyForceState(status, force);

    if (type === "badge") return svgResponse(buildBadgeSvg(status.state, status.caption), true);
    if (type === "graph") return svgResponse(buildGraphSvg(status.state, status.caption, null, theme, true), true);
    if (type === "isocat") return svgResponse(buildIsoSvg(status.state, status.caption, null, theme, true), true);

    const name = profile?.name?.split(" ")[0]?.toLowerCase() || "";
    const scene = {
        hackingOn: lastPushedRepo(events) ?? "",
        streakDays: 0,
        birthday: isBirthday(profile?.createdAt, now),
        hour: ownerHour(now),
        accent: "",
        weekend: isWeekend(now),
        topLang: Object.entries(langs).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "",
        seasonal: season(now),
        touchGrass: false,
        confetti: false,
        labelExtra: [] as string[],
    };
    return svgResponse(buildSvg(status.state, status.caption, theme, greetingFor(now, name), "", true, scene), true);
}

export default {
    async fetch(request: Request, env: any, ctx: any): Promise<Response> {
        // secrets/vars -> process.env, which the shared src/ code reads (needs nodejs_compat)
        if (env?.GITHUB_TOKEN) process.env.GITHUB_TOKEN = env.GITHUB_TOKEN;

        const url = new URL(request.url);

        if (url.pathname === "/") {
            return new Response(LANDING_HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
        }

        if (url.pathname === "/status") {
            const q = await checkRateLimit();
            return new Response(JSON.stringify(q ?? { remaining: null }), {
                headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
            });
        }

        if (url.pathname === "/preview") {
            const username = (url.searchParams.get("username") ?? "").trim();
            const type = url.searchParams.get("type") ?? "pet";
            const theme = url.searchParams.get("theme") === "light" ? "light" : "dark";
            const state = url.searchParams.get("state") ?? "";
            const force = (VALID_STATES as readonly string[]).includes(state) ? state : "";

            if (!USER_RE.test(username)) return svgResponse(errorSvg("enter a valid GitHub username", theme), false, 400);
            if (!(TYPES as readonly string[]).includes(type)) return svgResponse(errorSvg("unknown type", theme), false, 400);

            const cache = typeof caches !== "undefined" ? (caches as any).default : null;
            const key = new Request(`${url.origin}/preview?username=${username.toLowerCase()}&type=${type}&theme=${theme}&state=${force}`);
            const hit = cache ? await cache.match(key) : null;
            if (hit) return hit;

            let resp: Response;
            try {
                resp = await render(username, type, theme, force);
            } catch (err) {
                console.error("preview failed:", err);
                return svgResponse(errorSvg("something went wrong - try again", theme), false, 500);
            }
            if (cache && resp.headers.get("Cache-Control")?.startsWith("public")) ctx.waitUntil(cache.put(key, resp.clone()));
            return resp;
        }

        return new Response("not found", { status: 404 });
    },
};
