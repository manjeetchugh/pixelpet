// Species: red panda. One file = one animal. Drop another file in src/species/
// (copy this one, edit the grids/palette) and run with PET_SPECIES=<filename-without-.ts>.
// Grid letters: X = main body colour, c = light markings, d = dark details (palette slots fur/cream/dark).
// Required: SIT_FRONT, SIT_EYES, CURL_BODY, FRONT_BODY, FRONT_EYES. Everything else is optional.
// Optional TOY: a 7x6 grid of "h" replacing the yarn ball (coloured by PALETTE.<theme>.yarn).
// Size contract: SIT_FRONT 20x16, CURL_BODY 20x14, FRONT_BODY 16x14 (the scene is laid out for these).

// Optional palette overrides (merged over the default dark/light palettes).
export const PALETTE = {
    dark:  { fur: "#d2612c", cream: "#f4ead8", dark: "#5e3624", yarn: "#7fbf5a" },
    light: { fur: "#c4501e", cream: "#fbf1e0", dark: "#3b2218", yarn: "#4c9a2a" },
};

// ---------------- banner panda: sitting front view (20 wide x 16 tall)
// toy: bamboo (7x6, colour = PALETTE.<theme>.yarn)
export const TOY = [
    "...hh..",
    "...h...",
    "..hhh..",
    "...h...",
    "..hhh..",
    "...h...",
];

export const SIT_FRONT = [
    "...XX..........XX...",
    "..XccX........XccX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXcccXXXXXXcccXX..",
    "..XXcccXXXXXXcccXX..",
    "..XXcdcXXXXXXcdcXX..",
    "..XcccccccddcccccX..",
    "..XXcccccccccccccXX.",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXddddddddXXXXX..",
    "..XXXddddddddXXXXX..",
    "..XXXddddddddXXXXX..",
    "..XXXddddddddXXXXX..",
    "..ddd..dddddd..ddd..",
];

export const SIT_EYES: Array<[number, number]> = [[5, 5], [14, 5]];
// angry brows for the grumpy state (drawn dark, across the cream eye patches)
export const SIT_BROWS: Array<[number, number]> = [[4, 4], [5, 4], [14, 4], [15, 4]];

// ringed tail overlays (wag animation swaps these two poses): fur segments + dark rings
export const TAIL_A: Array<[number, number]> = [[18, 15], [19, 14]]; // swept right
export const TAIL_A_RINGS: Array<[number, number]> = [[19, 15], [18, 14], [19, 13]];
export const TAIL_B: Array<[number, number]> = [[19, 14], [18, 13]]; // curl up
export const TAIL_B_RINGS: Array<[number, number]> = [[19, 15], [19, 13], [18, 12]];

// ---------------- sleeping curl (20 x 14), tail wrapped across the front
export const CURL_BODY = [
    "....................",
    "....XX.....XX.......",
    "...XccX...XccX......",
    "...XXXXXXXXXXXX.....",
    "..XXXXXXXXXXXXXX....",
    "..XXccccXccccXXXXX..",
    "..XXccccXccccXXXXX..",
    "..XXccccdccccXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXddXXddXXddXXddXX.",
    ".ddXXddXXddXXddXXdd.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
];
export const CURL_LIDS: Array<[number, number]> = [[5, 6], [6, 6], [10, 6], [11, 6]];

// ---------------- graph panda: small front view (16 x 14)
export const FRONT_BODY = [
    "..XX........XX..",
    ".XccX......XccX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXccccXXccccXX.",
    ".XXccccXXccccXX.",
    ".XXccdcXXcdccXX.",
    ".XcccccddcccccX.",
    ".XXccccccccccXX.",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXddddddXXXX.",
    ".XXXXddddddXXXX.",
    ".ddd..dddd..ddd.",
];
export const FRONT_EYES: Array<[number, number]> = [[5, 5], [10, 5]];

// tucked/extended paw positions for the yarn bat (in panda grid coords)
export const PAW_TUCKED: Array<[number, number]> = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Array<[number, number]> = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];

// weekend shades: overlay on the sitting panda grid (rows 4-5, over the eyes)
export const SHADES: Array<[number, number]> = [
    [4, 4], [5, 4], [6, 4], [4, 5], [5, 5], [6, 5],
    [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4],
    [13, 4], [14, 4], [15, 4], [13, 5], [14, 5], [15, 5],
];

// head/body split for animations (row ranges of SIT_FRONT; collar stays put)
export const SIT_HEAD_ROWS: [number, number] = [0, 9];
export const SIT_BODY_ROWS: [number, number] = [10, 15];
