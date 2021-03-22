import {
    degToRad,
    multiply
} from '../libs/matrix.js';

export default class Hollow {
    constructor(vertices, normals) {
        this.vertices = vertices;
        this.normals = normals;
        this.nVertices = this.vertices.length/3;

        this.scale = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.rotationY = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.rotationX = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.rotationZ = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.translation = [0, 0, 0];
    }

    loadMatrices(matrices) {
        this.scale = matrices.scale;
        this.rotationY = matrices.rotationY;
        this.rotationX = matrices.rotationX;
        this.rotationZ = matrices.rotationZ;
        this.translation = matrices.translation;
    }

    reset() {
        this.scale = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.rotationY = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.rotationX = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.rotationZ = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        this.translation = [0, 0, 0];
    }

    updateTranslationX(value) {
        this.translation[0] = value;
    }

    updateTranslationY(value) {
        this.translation[1] = value;
    }

    updateTranslationZ(value) {
        this.translation[2] = value;
    }

    updateRotationX(deg) {
        const rad = degToRad(deg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        this.rotationX[5] = cos;
        this.rotationX[6] = sin;
        this.rotationX[9] = -sin;
        this.rotationX[10] = cos;  
    }

    updateRotationY(deg) {
        const rad = degToRad(deg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        this.rotationY[0] = cos;
        this.rotationY[2] = -sin;
        this.rotationY[8] = sin;
        this.rotationY[10] = cos;
    }

    updateRotationZ(deg) {
        const rad = degToRad(deg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        this.rotationZ[0] = cos;
        this.rotationZ[1] = sin;
        this.rotationZ[4] = -sin;
        this.rotationZ[5] = cos;
    }

    updateScale(scale) {
        this.scale = [
            scale, 0, 0, 0,
            0, scale, 0, 0, 
            0, 0, scale, 0, 
            0, 0, 0, 1
        ];
    }

    calculateObjectMat() {
        let identity = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        let objMat = multiply(identity, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.translation[0], this.translation[1], this.translation[2], 1
        ]);
        objMat = multiply(objMat, this.rotationZ);
        objMat = multiply(objMat, this.rotationY);
        objMat = multiply(objMat, this.rotationX);
        objMat = multiply(objMat, this.scale);
    
        return objMat;
    }
}