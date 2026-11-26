// Hand-crafted pixel grids for the red panda.
// "." = empty, "X" = red-orange fur, "c" = cream face/ear markings,
// "d" = dark brown (nose, tear marks, belly, legs, tail rings).
// Eyes/brows/paws/tail rings are coordinate overlays so the renderer can recolour and animate them.

// ---------------- banner panda: sitting front view (20 wide x 16 tall)
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
export const YARN = [
    "..hh...",
    ".hhhh..",
    "hh.hhh.",
    "hhhh.h.",
    ".hhhh..",
    "..hh...",
];
// tucked/extended paw positions for the yarn bat (in panda grid coords)
export const PAW_TUCKED: Array<[number, number]> = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Array<[number, number]> = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];
// raised-paw wave beside the right ear (shown while the panda is home)
export const PAW_WAVE: Array<[number, number]> = [[18, 4], [19, 3], [19, 4]];

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

// weekend shades: overlay on the sitting panda grid (rows 4-5, over the eyes)
export const SHADES: Array<[number, number]> = [
    [4, 4], [5, 4], [6, 4], [4, 5], [5, 5], [6, 5],
    [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4],
    [13, 4], [14, 4], [15, 4], [13, 5], [14, 5], [15, 5],
];

// head/body split for animations (row ranges of SIT_FRONT; collar stays put)
export const SIT_HEAD_ROWS: [number, number] = [0, 9];
export const SIT_BODY_ROWS: [number, number] = [10, 15];
