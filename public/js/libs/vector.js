/**
 * Return subtract from two given vectors with the same length
 * @param {vector} a 
 * @param {vector} b 
 * @returns vector
 */
export function subtract(a, b) {

    const len = a.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        res.push(a[i] - b[i]);
    }

    return res;
}

/**
 * Normalize given vector
 * @param {vector} a 
 * @returns vector
 */
export function normalize(a) {
    let res = [];

    const length = norm(a);
    for (let i = 0; i < a.length; i++) {
        res.push(a[i]/length);
    }

    return res;
}

/**
 * Return norm of given vector
 * @param {vector} a 
 * @returns vector
 */
export function norm(a) {
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        res += (a[i]*a[i]);
    }
    res = Math.sqrt(res);

    return res;
}

/**
 * Return cross product from two given (3D) vectors
 * @param {vector} a 
 * @param {vector} b 
 * @returns vector (3D)
 */
export function cross(a, b) {
    let res = [];

    res.push(a[1]*b[2] - a[2]*b[1]);
    res.push(a[2]*b[0] - a[0]*b[2]);
    res.push(a[0]*b[1] - a[1]*b[0]);

    return res;
}

/**
 * Return dot product from two given vectors with the same length
 * @param {vector} a 
 * @param {vector} b 
 * @returns vector
 */
export function dot(a, b) {
    const len = a.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        res += (a[i]*b[i]);
    }

    return res;
}

/**
 * Rotate given vector 180 degrees
 * @param {vector} a 
 */
export function negate(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] *= -1;
    }
}

/**
 * Return matrix multiplication with a vector
 * @param {matrix} mat 
 * @param {vector} vec 
 * @returns matrix
 */
export function matrixVectorMul(mat, vec) {

    let res = [];
    let vecLen = vec.length;
    let nRow = mat.length/vecLen;
    let sum = 0;
    for (let i = 0; i < nRow; i++) {
        sum = 0;
        for (let j = 0; j < vecLen; j++) {
            sum += mat[i*vecLen + j] * vec[j];
        }
        res.push(sum);
    }

    return res;
}