function main() {
    var canvas = document.getElementById('gl-canvas');

    canvas.width = 800;
    canvas.height = 800;

    var gl = canvas.getContext('webgl');
    if (!gl) {
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var vert = `precision mediump float;

    attribute vec3 vertPos;
    uniform mat4 normMat;
    uniform mat4 objMat;
    uniform mat4 modelViewMat;
    uniform mat4 projMat;
    
    void main() {
        vec4 tempPos = vec4(vertPos, 1.0);
        gl_Position = projMat * modelViewMat * objMat * tempPos;
    }`;

    var frag = `precision mediump float;

    void main() {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }`;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vert);
    gl.shaderSource(fragmentShader, frag);

    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.log("failed to compile vertex shader, ", gl.getShaderInfoLog(vertexShader));
        return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.log("failed to compile fragment shader, ", gl.getShaderInfoLog(fragmentShader));
        return;
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log("failed to link program : ", gl.getProgramInfoLog(program));
        return;
    }

    // ================ MATRICES =========================
    var normMat = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 3, 1
    ];

    var scaleMat = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    var rotateMat = [
        Math.cos(0), 0, -Math.sin(0), 0,
        0, 1, 0, 0,
        Math.sin(0), 0, Math.cos(0), 0,
        0, 0, 0, 1
    ];

    var transVector = [0, 0, 0];
    var transMat = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        transVector[0], transVector[1], transVector[2], 1
    ];

    var projMat = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    var identity = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    var camRotate = [
        Math.cos(0), 0, -Math.sin(0), 0,
        0, 1, 0, 0,
        Math.sin(0), 0, Math.cos(0), 0,
        0, 0, 0, 1
    ];

    var camTransVec = [0, 0, 0];
    var camTrans = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        transVector[0], transVector[1], transVector[2], 1
    ];
    // ===================================================
    
    // ================= CAMERA ==========================
    let camera = new Camera(gl.canvas.width, gl.canvas.height);
    // ===================================================

    // =============== BUFFERS ===========================
    gl.useProgram(program);

    var positionBuf = gl.createBuffer();
    var hollow = new Hollow();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
    var selectObject = document.getElementById('hollow');
    selectObject.addEventListener('change', function() {
        if (selectObject.value=="limas") {
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hollow.hollowlimas), gl.STATIC_DRAW);
            render();
        } else if (selectObject.value=="kubus") {
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hollow.hollowcubic), gl.STATIC_DRAW);
            render();
        } else {
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hollow.hollowprisma), gl.STATIC_DRAW);
            render();
        }
    })  

    let reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
        transVector = [0, 0, 0];
        scaleMat = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        projMat = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 1,
            0, 0, 0, 0
        ];

        transMat = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            transVector[0], transVector[1], transVector[2], 1
        ];
        rotateMat = [
            Math.cos(0), 0, -Math.sin(0), 0,
            0, 1, 0, 0,
            Math.sin(0), 0, Math.cos(0), 0,
            0, 0, 0, 1
        ];
        camera.updateDefault();
        render();
    })
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);

    var positionLoc = gl.getAttribLocation(program, 'vertPos');
    var normLoc = gl.getUniformLocation(program, 'normMat');
    var objMatLoc = gl.getUniformLocation(program, 'objMat');
    var modViewLoc = gl.getUniformLocation(program, 'modelViewMat');
    var projLoc = gl.getUniformLocation(program, 'projMat');
    // ===================================================

    // ================ EVENT HANDLER ====================
    let xSlider = document.getElementById('x-trans');
    xSlider.addEventListener('input', function() {
        transVector[0] = xSlider.value * 2 / 800 - 1;
        transMat = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            transVector[0], transVector[1], transVector[2], 1
        ];
        render();
    });

    let ySlider = document.getElementById('y-trans');
    ySlider.addEventListener('input', function() {
        transVector[1] = ySlider.value * 2 / 800 - 1;
        transMat = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            transVector[0], transVector[1], transVector[2], 1
        ];

        render();
    });

    let zSlider = document.getElementById('z-trans');
    zSlider.addEventListener('input', function() {
        transVector[2] = zSlider.value * -2 / 800 + 1;
        transMat = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            transVector[0], transVector[1], transVector[2], 1
        ];

        render();
    });

    let rotSlider_y = document.getElementById('y-rotate');
    rotSlider_y.addEventListener('input', function() {
        const rad = degToRad(rotSlider_y.value);
        rotateMat = [
            Math.cos(rad), 0, -Math.sin(rad), 0,
            0, 1, 0, 0,
            Math.sin(rad), 0, Math.cos(rad), 0,
            0, 0, 0, 1
        ];

        render();
    });

    let rotSlider_x = document.getElementById('x-rotate');
    rotSlider_x.addEventListener('input', function() {
        const rad = degToRad(rotSlider_x.value);
        rotateMat = [
            1, 0, 0, 0,
            0,  Math.cos(rad),  -Math.sin(rad), 0,
            0,  Math.sin(rad),  Math.cos(rad) ,0,
            0, 0, 0, 1
        ];

        render();
    });

    let rotSlider_z = document.getElementById('z-rotate');
    rotSlider_z.addEventListener('input', function() {
        const rad = degToRad(rotSlider_z.value);
        rotateMat = [
            Math.cos(rad), - Math.sin(rad), 0, 0,
            Math.sin(rad),  Math.cos(rad), 0, 0,
            0, 0, 1 ,0,
            0, 0, 0, 1
        ];

        render();
    });

    let scaleSlider = document.getElementById('obj-scale');
    scaleSlider.addEventListener('input', function() {
        const scale = scaleSlider.value/360;
        scaleMat = [
            scale, 0, 0, 0,
            0, scale, 0, 0, 
            0, 0, scale, 0, 
            0, 0, 0, 1
        ];
        render();
    });

    let camTranSlider = document.getElementById('cam-trans');
    camTranSlider.addEventListener('input', function() {
        camera.updateTranslationZ(camTranSlider.value * 10 / 800 - 5);
        render();
    });

    let camRotSliderY = document.getElementById('cam-rotate-y');
    camRotSliderY.addEventListener('input', function() {
        camera.updateRotationY(camRotSliderY.value);
        render();
    });
    let camRotSliderX = document.getElementById('cam-rotate-x');
    camRotSliderX.addEventListener('input', function() {
        camera.updateRotationX(camRotSliderX.value);
        render();
    });

    // ===================================================
    render();

    // ==================== DEBUG SECTION ===============

    // ==================================================

    function render() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.enable(gl.CULL_FACE);

        // gl.enable(gl.DEPTH_TEST);

        gl.vertexAttribPointer(
            positionLoc,
            3,
            gl.FLOAT,
            gl.FALSE,
            3 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(positionLoc);
    
        let objMat = multiply(identity, transMat);
        objMat = multiply(objMat, rotateMat);
        objMat = multiply(objMat, scaleMat);
                
        const modelView = camera.calculateModelView();

        gl.uniformMatrix4fv(normLoc, false, new Float32Array(normMat));
        gl.uniformMatrix4fv(objMatLoc, false, new Float32Array(objMat));
        gl.uniformMatrix4fv(modViewLoc, false, new Float32Array(modelView));
        gl.uniformMatrix4fv(projLoc, false, new Float32Array(projMat));
    
        gl.drawArrays(gl.TRIANGLES, 0, 1000);
    }
}
main();