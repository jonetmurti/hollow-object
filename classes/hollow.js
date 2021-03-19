class Hollow
{
    constructor(vertices) {
        this.vertices = vertices;
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

    }

    updateScale(k) {

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