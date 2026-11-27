// Species: floppy-eared dog. One file = one animal (copy src/species/redpanda.ts as a starting point).
// Grid letters: X = body, c = light markings, d = dark details, p = pink. h (toy only) = toy colour.
// Toy: a 7x6 grid of "h" that replaces the yarn ball; its colour is PALETTE.<theme>.yarn.

export const PALETTE = {
    dark: { fur: "#c58b55", cream: "#f3e3c8", dark: "#4a2e1b", yarn: "#e6dcc6" },
    light: { fur: "#b07840", cream: "#f7ebd3", dark: "#3d2314", yarn: "#b8a98a" },
};

// toy: bone
export const TOY = [
    ".......",
    ".......",
    ".......",
    "hh...hh",
    "hhhhhhh",
    "hh...hh",
];

export const SIT_FRONT = [
    "....XXXXXXXXXXXX....",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".ddXXXXXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXXXXXdd.",
    ".ddXXXXXccccXXXXXdd.",
    ".ddXXXXXcddcXXXXXdd.",
    "...XXXXXXccXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXccccccXXXXX..",
    "..XXXXXccccccXXXXX..",
    "..XdXXXccccccXXXXX..",
    "..XXXXXccccccXXXXX..",
    "..ccc..cccccc..ccc..",
];
export const SIT_EYES: Array<[number, number]> = [[6, 5], [13, 5]];
export const SIT_BROWS: Array<[number, number]> = [[5, 4], [6, 4], [13, 4], [14, 4]];

export const TAIL_A: Array<[number, number]> = [[18, 15], [19, 14], [19, 13]];
export const TAIL_A_RINGS: Array<[number, number]> = [];
export const TAIL_B: Array<[number, number]> = [[18, 15], [19, 15], [19, 14], [19, 13], [19, 12]];
export const TAIL_B_RINGS: Array<[number, number]> = [];

export const CURL_BODY = [
    "....................",
    "....................",
    "....XXXXXXXXXX......",
    "...XXXXXXXXXXXX.....",
    "..dXXXXXXXXXXXXd....",
    "..ddXXXXXXXXXXddXX..",
    "..ddXXXXXXXXXXddXX..",
    "..ddXXXXccXXXXddXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXdXXXdXXXdXXXdXXX.",
    ".dXXXdXXXdXXXdXXXXd.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
];
export const CURL_LIDS: Array<[number, number]> = [[5, 6], [6, 6], [11, 6], [12, 6]];

export const FRONT_BODY = [
    "..XXXXXXXXXXXX..",
    ".ddXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXdd.",
    ".ddXXXXXXXXXXdd.",
    ".ddXXXccccXXXdd.",
    ".ddXXXcddcXXXdd.",
    "..XXXXXccXXXXX..",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXccccccXXXX.",
    ".XXXXccccccXXXX.",
    ".ccc..cccc..ccc.",
];
export const FRONT_EYES: Array<[number, number]> = [[5, 5], [10, 5]];

// paws for the toy-bat animation + head/body split (same layout as the other species)
export const PAW_TUCKED: Array<[number, number]> = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Array<[number, number]> = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];
export const SIT_HEAD_ROWS: [number, number] = [0, 9];
export const SIT_BODY_ROWS: [number, number] = [10, 15];
