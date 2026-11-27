// Species: green frog. One file = one animal (copy src/species/redpanda.ts as a starting point).
// Grid letters: X = body, c = light markings, d = dark details, p = pink. h (toy only) = toy colour.
// Toy: a 7x6 grid of "h" that replaces the yarn ball; its colour is PALETTE.<theme>.yarn.

export const PALETTE = {
    dark: { fur: "#5fbf5a", cream: "#d8f0b8", dark: "#2b6b2f", yarn: "#c9d1d9" },
    light: { fur: "#3f9a3c", cream: "#e4f6c8", dark: "#1f5524", yarn: "#57606a" },
};

// toy: fly
export const TOY = [
    ".......",
    ".......",
    "h.....h",
    ".h.h.h.",
    "..hhh..",
    ".h...h.",
];

export const SIT_FRONT = [
    "...XXXX......XXXX...",
    "..XccccX....XccccX..",
    "..XccccX....XccccX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXdXXdXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXddddddddddXXX..",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XXXccccccccXXXXX..",
    "..ddd..dddddd..ddd..",
];
export const SIT_EYES: Array<[number, number]> = [[5, 2], [14, 2]];
export const SIT_BROWS: Array<[number, number]> = [[3, 1], [4, 1], [5, 1], [14, 1], [15, 1], [16, 1]];

export const TAIL_A: Array<[number, number]> = [];
export const TAIL_A_RINGS: Array<[number, number]> = [];
export const TAIL_B: Array<[number, number]> = [];
export const TAIL_B_RINGS: Array<[number, number]> = [];

export const CURL_BODY = [
    "....................",
    "....................",
    "....................",
    "....XXXX....XXXX....",
    "...XXXXXX..XXXXXX...",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXdddddddddXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXccccccccccXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..dd..dddddddd..dd..",
];
export const CURL_LIDS: Array<[number, number]> = [[5, 4], [6, 4], [13, 4], [14, 4]];

export const FRONT_BODY = [
    "..XXX......XXX..",
    ".XcccX....XcccX.",
    ".XcccX....XcccX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXdXXdXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXdddddddddXXX",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXccccccXXXX.",
    ".XXXXccccccXXXX.",
    ".ddd..dddd..ddd.",
];
export const FRONT_EYES: Array<[number, number]> = [[3, 2], [12, 2]];

// paws for the toy-bat animation + head/body split (same layout as the other species)
export const PAW_TUCKED: Array<[number, number]> = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Array<[number, number]> = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];
export const SIT_HEAD_ROWS: [number, number] = [0, 9];
export const SIT_BODY_ROWS: [number, number] = [10, 15];
