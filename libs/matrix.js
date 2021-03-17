function degToRad(deg) {
    return deg * Math.PI / 180;
}

function multiply(a, b) {
    /* 
        a and b are both 4 dimensional matrices
    */
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