// Shared props (heart, bowl, fire, cake...) live here. The animal itself lives in
// src/species/<name>.ts and is picked with PET_SPECIES (default: redpanda).
// This file re-exports the chosen species so render.ts / graphRender.ts / isoRender.ts
// keep using `sprites.SIT_FRONT` etc. unchanged.

type Grid = string[];
type Pts = Array<[number, number]>;

import * as DEFAULT from "./species/redpanda.ts";

const id = (process.env.PET_SPECIES || "redpanda").toLowerCase().replace(/[^a-z0-9_-]/g, "");
let S: any = DEFAULT;
if (id !== "redpanda") {
    // dynamic load works under Bun/Node. A bundler (Cloudflare Worker) can't resolve it,
    // so it quietly keeps the statically imported redpanda.
    try {
        S = await import(`./species/${id}.ts`);
    } catch {
        console.warn(`species '${id}' not found, falling back to redpanda`);
    }
}
const R: any = DEFAULT;

// required
export const SIT_FRONT: Grid = S.SIT_FRONT ?? R.SIT_FRONT;
export const SIT_EYES: Pts = S.SIT_EYES ?? R.SIT_EYES;
export const CURL_BODY: Grid = S.CURL_BODY ?? R.CURL_BODY;
export const FRONT_BODY: Grid = S.FRONT_BODY ?? R.FRONT_BODY;
export const FRONT_EYES: Pts = S.FRONT_EYES ?? R.FRONT_EYES;
// optional: a missing overlay simply draws nothing (e.g. no tail, no shades)
export const SIT_BROWS: Pts = S.SIT_BROWS ?? [];
export const TAIL_A: Pts = S.TAIL_A ?? [];
export const TAIL_A_RINGS: Pts = S.TAIL_A_RINGS ?? [];
export const TAIL_B: Pts = S.TAIL_B ?? [];
export const TAIL_B_RINGS: Pts = S.TAIL_B_RINGS ?? [];
export const CURL_LIDS: Pts = S.CURL_LIDS ?? [];
export const PAW_TUCKED: Pts = S.PAW_TUCKED ?? [];
export const PAW_EXTENDED: Pts = S.PAW_EXTENDED ?? [];
export const SHADES: Pts = S.SHADES ?? [];
export const SIT_HEAD_ROWS: [number, number] = S.SIT_HEAD_ROWS ?? [0, 9];
export const SIT_BODY_ROWS: [number, number] = S.SIT_BODY_ROWS ?? [10, 15];
export const PALETTE: Record<string, Record<string, string>> = S.PALETTE ?? {};

export const HEART = [
    ".h.h.",
    "hhhhh",
    "hhhhh",
    ".hhh.",
    "..h..",
];

export const BOWL = [
    "............",
    ".XXXXXXXXXX.",
    "..XXXXXXXX..",
    "...XXXXXX...",
    "............",
];

// ---------------- props for the banner scene
const DEFAULT_TOY = [
    "..hh...",
    ".hhhh..",
    "hh.hhh.",
    "hhhh.h.",
    ".hhhh..",
    "..hh...",
];
// the species can bring its own 7x6 toy (TOY, drawn in PALETTE.<theme>.yarn); yarn is the fallback
export const YARN: Grid = S.TOY ?? DEFAULT_TOY;
// ---------------- v1.1 props ----------------
// campfire (f = flame outer, F = flame core, w = wood log) - two flicker frames
export const FIRE_A = [
    "....f.....",
    "....ff....",
    "...fFFf...",
    "...fFFf...",
    "..ffffff..",
    "..ffffff..",
    ".wwwwwwww.",
    "..wwwwww..",
];
export const FIRE_B = [
    ".....f....",
    "....ff....",
    "...fFF....",
    "..ffFFf...",
    "..fffff...",
    "..ffffff..",
    ".wwwwwwww.",
    "..wwwwww..",
];

// birthday cake (k = cake body, p = frosting, c = candle, f = flame)
export const CAKE = [
    ".....c......",
    ".....c......",
    "..pppppppp..",
    ".kkkkkkkkkk.",
    ".kkkkkkkkkk.",
    "kkkkkkkkkkkk",
    "kkkkkkkkkkkk",
];
export const CAKE_CANDLE: Array<[number, number]> = [[5, 0], [5, 1]];
export const CAKE_FLAME: Array<[number, number]> = [[5, -1]];

// crescent moon (m)
export const MOON = [
    "...mmm..",
    "..mmmm..",
    ".mmm....",
    ".mmm....",
    ".mmm....",
    "..mmmm..",
    "...mmm..",
];

// ---------------- v1.2 props ----------------
// release trophy (y = gold)
export const TROPHY = [
    "..yyyy..",
    ".yyyyyy.",
    ".yyyyyy.",
    "..yyyy..",
    "...yy...",
    "...yy...",
    "..yyyy..",
    ".yyyyyy.",
];

// sick-day thermometer (w = tube, r = mercury)
export const THERMOMETER = [
    "..w..",
    ".w.w.",
    ".wrw.",
    ".wrw.",
    ".wrw.",
    ".rrr.",
    ".rrr.",
];

// october pumpkin (o = body, g = stem)
export const PUMPKIN = [
    "....g.....",
    "..ooooo...",
    ".ooooooo..",
    "oooooooooo",
    "oooooooooo",
    ".ooooooo..",
    "..ooooo...",
];

// weekend lemonade (y = drink, s = straw)
export const LEMONADE = [
    "s....",
    ".s...",
    "yyyy.",
    "yyyy.",
    "yyyy.",
    ".yyy.",
];

