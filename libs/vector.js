function subtract(a, b) {
    /*
        a and b are vectors of same length
    */

    const len = a.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        res.push(a[i] - b[i]);
    }

    return res;
}

function normalize(a) {
    /*
        normalize vector a
    */

    let res = [];

    const length = norm(a);
    for (let i = 0; i < a.length; i++) {
        res.push(a[i]/length);
    }

    return res;
}

function norm(a) {
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        res += (a[i]*a[i]);
    }
    res = Math.sqrt(res);

    return res;
}

function cross(a, b) {
    /*
        a and b are 3d vectors
    */

    let res = [];

    res.push(a[1]*b[2] - a[2]*b[1]);
    res.push(a[2]*b[0] - a[0]*b[2]);
    res.push(a[0]*b[1] - a[1]*b[0]);

    return res;
}

function dot(a, b) {
    /*
        a and b are vectors of same length
    */

    const len = a.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        res += (a[i]*b[i]);
    }

    return res;
}

function negate(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] *= -1;
    }
}

function matrixVectorMul(mat, vec) {
    /*
        number of matrix column = vec.length
    */

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