// Species: little penguin. One file = one animal (copy src/species/redpanda.ts as a starting point).
// Grid letters: X = body, c = light markings, d = dark details, p = pink. h (toy only) = toy colour.
// Toy: a 7x6 grid of "h" that replaces the yarn ball; its colour is PALETTE.<theme>.yarn.

export const PALETTE = {
    dark: { fur: "#2f3a48", cream: "#f4f1ea", dark: "#e8a33d", yarn: "#58a6ff" },
    light: { fur: "#1f2933", cream: "#f7f4ec", dark: "#d98a1a", yarn: "#0969da" },
};

// toy: fish
export const TOY = [
    ".......",
    ".......",
    ".......",
    "..hhh.h",
    ".hhhhhh",
    "..hhh.h",
];

export const SIT_FRONT = [
    "....XXXXXXXXXXXX....",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXccccXXXXccccXX..",
    "..XXccccXXXXccccXX..",
    "..XXccccXddXccccXX..",
    "..XXXcccddddcccXXX..",
    "..XXXXXccccccXXXXX..",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXccccccccccXXX..",
    "..XXXccccccccccXXX..",
    "..XXXccccccccccXXX..",
    "..XXXccccccccccXXX..",
    "..ddd..dddddd..ddd..",
];
export const SIT_EYES: Array<[number, number]> = [[5, 5], [14, 5]];
export const SIT_BROWS: Array<[number, number]> = [[4, 4], [5, 4], [14, 4], [15, 4]];

export const TAIL_A: Array<[number, number]> = [];
export const TAIL_A_RINGS: Array<[number, number]> = [];
export const TAIL_B: Array<[number, number]> = [];
export const TAIL_B_RINGS: Array<[number, number]> = [];

export const CURL_BODY = [
    "....................",
    "....................",
    "......XXXXXXXX......",
    "....XXXXXXXXXXXX....",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXccccXXXXccccXX..",
    "..XXccccXddXccccXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXccccccccXXXXX.",
    ".XXXXccccccccccXXXX.",
    ".XXXXccccccccccXXXX.",
    ".XXXXXccccccccXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
];
export const CURL_LIDS: Array<[number, number]> = [[5, 6], [6, 6], [13, 6], [14, 6]];

export const FRONT_BODY = [
    "...XXXXXXXXXX...",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXccXXXXXXccXX.",
    ".XXccXXXXXXccXX.",
    ".XXXcccddcccXXX.",
    ".XXXXccccccXXXX.",
    "..XXXXccccXXXX..",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXccccccccXXX.",
    ".XXXccccccccXXX.",
    ".ddd..dddd..ddd.",
];
export const FRONT_EYES: Array<[number, number]> = [[3, 5], [12, 5]];

// paws for the toy-bat animation + head/body split (same layout as the other species)
export const PAW_TUCKED: Array<[number, number]> = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Array<[number, number]> = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];
export const SIT_HEAD_ROWS: [number, number] = [0, 9];
export const SIT_BODY_ROWS: [number, number] = [10, 15];
