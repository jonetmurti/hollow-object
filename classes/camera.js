class Camera 
{
    constructor(canvasWidth, canvasHeight) {
        this.rotationX = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
        this.rotationY = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
        
        this.rotationZ = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];

        this.translation = [0, 0, -2];
    }

    updateDefault() {
        this.rotationX = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
        this.rotationY = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
        
        this.rotationZ = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];

        this.translation = [0, 0, -2];
        document.getElementById('x-trans').value=400;
        document.getElementById('y-trans').value=400;
        document.getElementById('z-trans').value=400;
        document.getElementById('x-rotate').value=0;
        document.getElementById('y-rotate').value=0;
        document.getElementById('z-rotate').value=0;
        document.getElementById('obj-scale').value=360;
        document.getElementById('cam-trans').value=225;
        document.getElementById('cam-rotate-x').value=0;
        document.getElementById('cam-rotate-y').value=0;
        document.getElementById('projection').value="default";
    }
    updateRotationX(deg) {
        const rad = degToRad(deg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        this.rotationX[4] = cos;
        this.rotationX[5] = -sin;
        this.rotationX[7] = sin;
        this.rotationX[8] = cos;
    }

    updateTranslationZ(val) {
        this.translation[2] = val;
    }

    updateRotationY(deg) {
        const rad = degToRad(deg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        this.rotationY[0] = cos;
        this.rotationY[2] = sin;
        this.rotationY[6] = -sin;
        this.rotationY[8] = cos;
    }
    updateRotationZ(deg) {
        const rad = degToRad(deg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        this.rotationZ[0] = cos;
        this.rotationZ[1] = -sin;
        this.rotationZ[3] = sin;
        this.rotationZ[4] = cos;
    }

    calculateModelView() {
        let eye = [0, 0, 0];
        let at = [0, 0, 0];
        let up = [0, 1, 0];
    
        for (let i = 0; i < eye.length; i++) {
            eye[i] += this.translation[i];
        }

        eye = matrixVectorMul(this.rotationY, eye);
        eye = matrixVectorMul(this.rotationX, eye);
        eye = matrixVectorMul(this.rotationZ, eye);
        
        let zaxis = normalize(subtract(at, eye));
        let xaxis = normalize(cross(zaxis, up));
        let yaxis = cross(xaxis, zaxis);

        negate(xaxis);

        return [
            xaxis[0], yaxis[0], zaxis[0], 0, 
            xaxis[1], yaxis[1], zaxis[1], 0,
            xaxis[2], yaxis[2], zaxis[2], 0,
            -dot(xaxis, eye), -dot(yaxis, eye), -dot(zaxis, eye), 1
        ];
    }

    ortographic() {
        var left = -2;
        var right = 2;
        var bot = -2;
        var top = 2;
        var near = 0.1;
        var far =100;
 
        var matrix = [
            2/(right - left), 0, 0, 0,
            0, 2/(top - bot), 0, 0,
            0, 0, -2/(far - near), 0,
            -1*(left + right)/(right - left), -1*(top + bot)/(top - bot), -1*(far + near )/(far - near), 1
        ];
        return matrix;
    }
}