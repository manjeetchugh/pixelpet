// Species: long-eared bunny. One file = one animal (copy src/species/redpanda.ts as a starting point).
// Grid letters: X = body, c = light markings, d = dark details, p = pink. h (toy only) = toy colour.
// Toy: a 7x6 grid of "h" that replaces the yarn ball; its colour is PALETTE.<theme>.yarn.

export const PALETTE = {
    dark: { fur: "#d9d3ca", cream: "#fbf6ee", dark: "#8d7f72", yarn: "#ff8c32" },
    light: { fur: "#cfc6bb", cream: "#f3ece2", dark: "#6b5d51", yarn: "#e8590c" },
};

// toy: carrot
export const TOY = [
    ".......",
    ".......",
    "....hhh",
    "..hhhh.",
    ".hhhh..",
    "hh.....",
];

export const SIT_FRONT = [
    "...XX..........XX...",
    "...XpX........XpX...",
    "...XpX........XpX...",
    "...XpX........XpX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXccXXXppXXXccXX..",
    "..XXXXXXXccXXXXXXX..",
    "...XXXXXXXXXXXXXX...",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XXXccccccccXXXXX..",
    "..XXXccccccccXXXXX..",
    "..ccc..cccccc..ccc..",
];
export const SIT_EYES: Array<[number, number]> = [[5, 6], [14, 6]];
export const SIT_BROWS: Array<[number, number]> = [[4, 5], [5, 5], [14, 5], [15, 5]];

export const TAIL_A: Array<[number, number]> = [[18, 14], [18, 15], [19, 15]];
export const TAIL_A_RINGS: Array<[number, number]> = [];
export const TAIL_B: Array<[number, number]> = [[18, 13], [18, 14], [19, 14]];
export const TAIL_B_RINGS: Array<[number, number]> = [];

export const CURL_BODY = [
    "....................",
    "....XX....XX........",
    "...XpX....XpX.......",
    "...XXXXXXXXXXXX.....",
    "..XXXXXXXXXXXXXX....",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    "..XXXXXXppXXXXXXXX..",
    "..XXXXXXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXXXXcc.",
    ".XXXXXXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXXXXXX..",
];
export const CURL_LIDS: Array<[number, number]> = [[4, 6], [5, 6], [12, 6], [13, 6]];

export const FRONT_BODY = [
    "..XX........XX..",
    "..XpX......XpX..",
    "..XpX......XpX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    ".XXccXXppXXccXX.",
    ".XXXXXXccXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXccccccccXXX.",
    ".XXXccccccccXXX.",
    ".ccc..cccc..ccc.",
];
export const FRONT_EYES: Array<[number, number]> = [[5, 5], [10, 5]];

// paws for the toy-bat animation + head/body split (same layout as the other species)
export const PAW_TUCKED: Array<[number, number]> = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Array<[number, number]> = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];
export const SIT_HEAD_ROWS: [number, number] = [0, 9];
export const SIT_BODY_ROWS: [number, number] = [10, 15];
