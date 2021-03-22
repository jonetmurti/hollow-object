import {
    normalize,
    subtract,
    cross,
    negate
} from '../libs/vector.js';
import {
    degToRad
} from '../libs/matrix.js';

const a = 2;
const t = 2;
const w = 0.25;
const t_triangle = Math.sqrt(t*t + a*a/4);
const CF = 2 * w * Math.sqrt(t*t + a*a/2) / a;

const sinAlpha = t / t_triangle;
const cosAlpha = a / (2*t_triangle);
const tanAlpha = 2 * t / a;

const innerT = t - (w / cosAlpha);
// const innerHalfDiagonal = (a / Math.sqrt(2)) * innerT / Math.sqrt(t*t + a*a/2);
const innerXZ = (a / 2) - w*(sinAlpha + cosAlpha) + w*(sinAlpha - cosAlpha) / tanAlpha;

let A = [-a/2, 0, -a/2];
let B = [a/2, 0, -a/2];
let C = [0, t, 0];
let D = [-a*(t_triangle - w - CF)/(2*t_triangle), w*t/t_triangle, a*((w/t_triangle) - 1)/2];
let E = [a*(t_triangle - w - CF)/(2*t_triangle), w*t/t_triangle, a*((w/t_triangle) - 1)/2];
let F = [0, t*(1 - CF/t_triangle), a*((t_triangle - CF)/t_triangle - 1)/2]
let innerD = [-a*(t_triangle - w - CF)/(2*t_triangle), w*(sinAlpha - cosAlpha), -(a/2) + w*(sinAlpha + cosAlpha)];
let innerE = [a*(t_triangle - w - CF)/(2*t_triangle), w*(sinAlpha - cosAlpha), -(a/2) + w*(sinAlpha + cosAlpha)];
let innerF = [0, w*(sinAlpha - cosAlpha) + (t_triangle - w - CF)*sinAlpha, -(a/2) + w*(sinAlpha + cosAlpha) + (t_triangle - w - CF)*cosAlpha];
// let innerA = [-innerHalfDiagonal / Math.sqrt(2), 0, -innerHalfDiagonal / Math.sqrt(2)];
let innerA = [-innerXZ, 0, -innerXZ];
// let innerB = [innerHalfDiagonal / Math.sqrt(2), 0, -innerHalfDiagonal / Math.sqrt(2)];
let innerB = [innerXZ, 0, -innerXZ];
let innerC = [0, innerT, 0];

function bulkRotate(arr, deg) {
    const rad = degToRad(deg);
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);
    let res = [];

    for (let i = 0; i < arr.length; i += 3) {
        let newX = arr[i]*cos + arr[i + 2]*sin;
        let newY = arr[i + 1];
        let newZ = arr[i + 2]*cos - arr[i]*sin;
        res.push(newX);
        res.push(newY);
        res.push(newZ);
    }

    return res;
}

let limasFace = [
    // front
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
    ...C,

    ...E,
    ...innerE,
    ...innerD,
    ...E,
    ...innerD,
    ...D,

    ...innerE,
    ...F,
    ...innerF,
    ...innerE,
    ...E,
    ...F,

    ...innerD,
    ...innerF,
    ...F,
    ...innerD,
    ...F,
    ...D,

    ...innerE,
    ...innerF,
    ...innerC,
    ...innerE,
    ...innerC,
    ...innerB,

    ...innerB,
    ...innerA,
    ...innerD,
    ...innerB,
    ...innerD,
    ...innerE,

    ...innerA,
    ...innerC,
    ...innerF,
    ...innerA,
    ...innerF,
    ...innerD,

    ...innerB,
    ...B,
    ...A,
    ...innerB,
    ...A,
    ...innerA
];

let frontNormal = normalize(cross(subtract(B, A), subtract(C, A)));
let backNormal = normalize(cross(subtract(A, B), subtract(A, C)));
let topNormal = normalize(cross(subtract(innerE, E), subtract(D, E)));
let leftNormal = normalize(cross(subtract(innerD, D), subtract(F, D)));
let rightNormal = normalize(cross(subtract(innerE, E), subtract(F, E)));
let bottomNormal = normalize(cross(subtract(B, A), subtract(innerA, A)));

negate(frontNormal);
negate(backNormal);
negate(topNormal);
negate(leftNormal);
negate(rightNormal);
negate(bottomNormal);

let faceNormals = [
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,

    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,

    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,
    ...frontNormal,

    ...topNormal,
    ...topNormal,
    ...topNormal,
    ...topNormal,
    ...topNormal,
    ...topNormal,

    ...rightNormal,
    ...rightNormal,
    ...rightNormal,
    ...rightNormal,
    ...rightNormal,
    ...rightNormal,

    ...leftNormal,
    ...leftNormal,
    ...leftNormal,
    ...leftNormal,
    ...leftNormal,
    ...leftNormal,

    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,

    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,

    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,
    ...backNormal,

    ...bottomNormal,
    ...bottomNormal,
    ...bottomNormal,
    ...bottomNormal,
    ...bottomNormal,
    ...bottomNormal,
];

export let hollowLimas = [
    ...limasFace,
    ...bulkRotate(limasFace, 90),
    ...bulkRotate(limasFace, 180),
    ...bulkRotate(limasFace, 270)
];

export let limasNormals = [
    ...faceNormals,
    ...bulkRotate(faceNormals, 90),
    ...bulkRotate(faceNormals, 180),
    ...bulkRotate(faceNormals, 270)
];