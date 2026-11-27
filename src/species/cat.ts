// Species: orange tabby cat. One file = one animal (copy src/species/redpanda.ts as a starting point).
// Grid letters: X = body, c = light markings, d = dark details, p = pink. h (toy only) = toy colour.
// Toy: a 7x6 grid of "h" that replaces the yarn ball; its colour is PALETTE.<theme>.yarn.

export const PALETTE = {
    dark: { fur: "#e08a3c", cream: "#f6e7cf", dark: "#6b3a1e", yarn: "#9aa4b2" },
    light: { fur: "#d2761f", cream: "#fbefdb", dark: "#5a2f17", yarn: "#6e7781" },
};

// toy: toy mouse
export const TOY = [
    ".......",
    ".......",
    ".hh.hh.",
    "hhhhhhh",
    "hhhhhhh",
    ".hhhhh.",
];

export const SIT_FRONT = [
    "..X..............X..",
    "..XX............XX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXdXXXXXXdXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXccXXXddXXXccXX..",
    "..XXXXXXXccXXXXXXX..",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XdXccccccccXXdXX..",
    "..XXXccccccccXXXXX..",
    "..XdXccccccccXXdXX..",
    "..ccc..cccccc..ccc..",
];
export const SIT_EYES: Array<[number, number]> = [[5, 5], [14, 5]];
export const SIT_BROWS: Array<[number, number]> = [[4, 4], [5, 4], [14, 4], [15, 4]];

export const TAIL_A: Array<[number, number]> = [[18, 15], [19, 15], [19, 14], [19, 13], [19, 12]];
export const TAIL_A_RINGS: Array<[number, number]> = [[19, 14]];
export const TAIL_B: Array<[number, number]> = [[18, 15], [19, 15], [19, 14], [19, 13], [18, 12]];
export const TAIL_B_RINGS: Array<[number, number]> = [[19, 13]];

export const CURL_BODY = [
    "....................",
    "...X..........X.....",
    "...XX........XX.....",
    "...XXXXXXXXXXXX.....",
    "..XXXXXXXXXXXXXX....",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXddXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXdXXXdXXXdXXXdXXX.",
    ".dXXXdXXXdXXXdXXXXd.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
];
export const CURL_LIDS: Array<[number, number]> = [[4, 6], [5, 6], [12, 6], [13, 6]];

export const FRONT_BODY = [
    ".X............X.",
    ".XX..........XX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXdXXXXXXdXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXccXXddXXccXX.",
    ".XXXXXXccXXXXXX.",
    ".XXXXXXXXXXXXXX.",
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
