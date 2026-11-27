// Example "organism": a slime. No tail, no paws, no brows - those overlays are optional.
// X = body, c = highlight, d = dark details.
export const PALETTE = {
    dark:  { fur: "#4fbf6a", cream: "#b6f0c2", dark: "#1f6b34", yarn: "#d2a8ff" },
    light: { fur: "#2e9e4c", cream: "#9fe3b0", dark: "#145226", yarn: "#8250df" },
};

// toy: gem (7x6, colour = PALETTE.<theme>.yarn)
export const TOY = [
    "..hhh..",
    ".hhhhh.",
    "hhhhhhh",
    ".hhhhh.",
    "..hhh..",
    "...h...",
];

export const SIT_FRONT = [
    "....................",
    "....................",
    "....................",
    "....................",
    ".......XXXXXX.......",
    ".....XXXXXXXXXX.....",
    "....XXcccXXXXXXX....",
    "...XXXcXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
    "..dddddddddddddddd..",
];
export const SIT_EYES: Array<[number, number]> = [[6, 9], [13, 9]];
export const SIT_HEAD_ROWS: [number, number] = [0, 11];
export const SIT_BODY_ROWS: [number, number] = [12, 15];

export const CURL_BODY = [
    "....................",
    "....................",
    "....................",
    "....................",
    "....................",
    ".......XXXXXX.......",
    ".....XXXXXXXXXX.....",
    "....XXXXXXXXXXXX....",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
    "..dddddddddddddddd..",
];
export const CURL_LIDS: Array<[number, number]> = [[6, 9], [7, 9], [12, 9], [13, 9]];

export const FRONT_BODY = [
    "................",
    "................",
    "................",
    "................",
    "....XXXXXXXX....",
    "..XXXXXXXXXXXX..",
    "..XXcXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXX..",
    "..dddddddddddd..",
];
export const FRONT_EYES: Array<[number, number]> = [[5, 8], [10, 8]];
