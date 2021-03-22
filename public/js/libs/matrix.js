/**
 * Convert angle in degree to radian
 * @param {number} deg
 * @returns number 
 */
export function degToRad(deg) {
    return deg * Math.PI / 180;
}

/**
 * Return matrix (4D) multiplication
 * @param {matrix} a (4D)
 * @param {matrix} b (4D)
 * @returns matrix (4D)
 */
export function multiply(a, b) {
    let res = [];
    let temp = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            temp = 0;
            for (let k = 0; k < 4; k++) {
                temp += b[4*i + k] * a[4*k + j];
            }
            res.push(temp);
        }
    }
    return res;
}