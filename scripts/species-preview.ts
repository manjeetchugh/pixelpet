// One-off helper: renders a preview SVG (dark + light) for EVERY species in src/species/,
// then refreshes the gallery block in README.md. Run it by hand whenever you change a sprite:
//
//     npm run previews           (or: node scripts/species-previews.ts   |   bun scripts/species-previews.ts)
//
// Output: docs/species/<name>.svg and docs/species/<name>-light.svg
// README: put these two lines wherever the gallery should go and the script fills between them:
//     <!-- species:start -->
//     <!-- species:end -->
// (no markers? the gallery markdown is printed to the console so you can paste it)
//
// Why a child process per animal: src/sprites.ts picks the species once, when it loads
// (PET_SPECIES), so each animal needs a fresh process.
// Optional: PREVIEW_STATE=sleeping|zoomies|grumpy|... renders that state instead of "content".

import { readdirSync, mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const speciesDir = join(root, "src", "species");
const outDir = join(root, "docs", "species");
const STATE = process.env.PREVIEW_STATE || "content";

const oneAt = process.argv.indexOf("--one");

if (oneAt !== -1) {
    await renderOne(process.argv[oneAt + 1]);
} else {
    main();
}

// ---- child mode: PET_SPECIES is already set, so ../src/sprites.ts loads the right animal
async function renderOne(name: string): Promise<void> {
    const { buildSvg } = await import("../src/render.ts");
    // fixed, deterministic scene so re-running only changes the file when a sprite changed
    const scene = {
        hackingOn: "", streakDays: 0, birthday: false, hour: 12, accent: "", weekend: false,
        topLang: "", seasonal: "" as const, touchGrass: false, confetti: false, labelExtra: [] as string[],
    };
    mkdirSync(outDir, { recursive: true });
    for (const theme of ["dark", "light"] as const) {
        const svg = buildSvg(STATE, `${name} - ${STATE}`, theme, `meet the ${name}`, "", false, scene);
        const file = join(outDir, theme === "dark" ? `${name}.svg` : `${name}-light.svg`);
        writeFileSync(file, svg, "utf-8");
    }
    console.log(`  ${name}: docs/species/${name}.svg + ${name}-light.svg`);
}

// ---- parent mode
function main(): void {
    const names = readdirSync(speciesDir).filter((f) => f.endsWith(".ts") && !f.startsWith("_")).map((f) => f.slice(0, -3)).sort();
    if (!names.length) { console.error("no species found in src/species/"); process.exit(1); }
    console.log(`rendering ${names.length} species (state: ${STATE})`);

    const failed: string[] = [];
    for (const name of names) {
        const r = spawnSync(process.execPath, [...process.execArgv, fileURLToPath(import.meta.url), "--one", name], {
            env: { ...process.env, PET_SPECIES: name },
            stdio: "inherit",
        });
        if (r.status !== 0) failed.push(name);
    }

    const block = names.map((n) =>
        `### ${n}\n\n<picture>\n  <source media="(prefers-color-scheme: dark)" srcset="docs/species/${n}.svg">\n  <img alt="${n}" src="docs/species/${n}-light.svg">\n</picture>\n`
    ).join("\n");

    const readmePath = join(root, "README.md");
    const START = "<!-- species:start -->", END = "<!-- species:end -->";
    const readme = existsSync(readmePath) ? readFileSync(readmePath, "utf-8") : "";
    const a = readme.indexOf(START), b = readme.indexOf(END);
    if (a !== -1 && b > a) {
        writeFileSync(readmePath, readme.slice(0, a + START.length) + "\n\n" + block + "\n" + readme.slice(b), "utf-8");
        console.log("README.md gallery updated");
    } else {
        console.log(`\nREADME.md has no ${START} / ${END} markers - paste this where you want the gallery:\n\n${block}`);
    }

    if (failed.length) { console.error(`FAILED: ${failed.join(", ")}`); process.exit(1); }
}
