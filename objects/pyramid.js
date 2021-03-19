const a = 2;
const t = 2;
const w = 0.25;
const t_triangle = Math.sqrt(t*t + a*a/4);
const CF = 2 * w * Math.sqrt(t*t + a*a/2) / a;

let A = [-a/2, 0, -a/2];
let B = [a/2, 0, -a/2];
let C = [0, t, 0];
let D = [-a*(t_triangle - w - CF)/(2*t_triangle), w*t/t_triangle, a*((w/t_triangle) - 1)/2];
let E = [a*(t_triangle - w - CF)/(2*t_triangle), w*t/t_triangle, a*((w/t_triangle) - 1)/2];
let F = [0, t*(1 - CF/t_triangle), a*((t_triangle - CF)/t_triangle - 1)/2]

let pyramid = [
    ...A,
    ...B,
    ...E,
    ...A,
    ...E,
    ...D,

    ...B,
    ...F,
    ...E,
    ...B,
    ...C,
    ...F,

    ...A,
    ...D,
    ...F,
    ...A,
    ...F,
    ...C
];