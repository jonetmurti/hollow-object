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
    
    var projMat = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 1,
        0, 0, 0, 0
    ];

    
    // ===================================================

    // ================= OBJECT & CAMERA =====================
    var camera = new Camera(gl.canvas.width, gl.canvas.height);
    var currentObject = null;
    var projectionMatrix = projMat;
    // =======================================================

    // =============== BUFFERS ===========================
    gl.useProgram(program);

    var positionBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
    // ===================================================

    // ============= Load File ===========================
    var fileReader =  new FileReader()

    document.getElementById("load-button").addEventListener("change", function(){
        if (this.files[0]){
            fileReader.readAsText(this.files[0]);
        }
    });
    
    fileReader.onload = function(){
        data = JSON.parse(fileReader.result);
        currentObject = new Hollow(data.vertices);
        currentObject.loadMatrices(data.matrices);
        // TODO : Load Color
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(currentObject.vertices), gl.STATIC_DRAW);
        render();
        document.getElementById('hollow').value = '';
    };
    // ===================================================

    // =============== CHOOSE OBJECT ===========================
    var selectObject = document.getElementById('hollow');
    selectObject.addEventListener('change', function() {
        document.getElementById("load-button").value = '';
        if (selectObject.value=="limas") {
            currentObject = new Hollow(hollowLimas);
        } else if (selectObject.value=="kubus") {
            currentObject = new Hollow(hollowCubic);
        } else {
            currentObject = new Hollow(hexagon);
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(currentObject.vertices), gl.STATIC_DRAW);
        render();
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
        currentObject.reset();
        camera.updateDefault();
        projectionMatrix = projMat;
        render();
    })
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);

    var positionLoc = gl.getAttribLocation(program, 'vertPos');
    var objMatLoc = gl.getUniformLocation(program, 'objMat');
    var modViewLoc = gl.getUniformLocation(program, 'modelViewMat');
    var projLoc = gl.getUniformLocation(program, 'projMat');
    // ===================================================

    // ================ EVENT HANDLER ====================
    // Save file
    document.getElementById("save-button").addEventListener("click", function() {
        if (currentObject) {
            save(currentObject);
        }
    });

    let xSlider = document.getElementById('x-trans');
    xSlider.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateTranslationX(xSlider.value * 2 / gl.canvas.width - 1);
            render();
        }
    });

    let ySlider = document.getElementById('y-trans');
    ySlider.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateTranslationY(ySlider.value * 2 / gl.canvas.height - 1);
            render();
        }
    });

    let zSlider = document.getElementById('z-trans');
    zSlider.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateTranslationZ(zSlider.value * -2 / 800 + 1);
            render();
        }
    });

    let rotSlider = document.getElementById('y-rotate');
    rotSlider.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateRotationY(rotSlider.value);
            render();
        }
    });

    let rotSlider_x = document.getElementById('x-rotate');
    rotSlider_x.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateRotationX(rotSlider_x.value);
            render();
        }
    });

    let rotSlider_z = document.getElementById('z-rotate');
    rotSlider_z.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateRotationZ(rotSlider_z.value);
            render();
        }
    });

    let scaleSlider = document.getElementById('obj-scale');
    scaleSlider.addEventListener('input', function() {
        if (currentObject) {
            currentObject.updateScale(scaleSlider.value/360);
            render();
        }
    });

    let camTranSlider = document.getElementById('cam-trans');
    camTranSlider.addEventListener('input', function() {
        if (currentObject) {
            camera.updateTranslationZ(camTranSlider.value * 10 / 800 - 5);
            render();
        }
    });

    let camRotSliderY = document.getElementById('cam-rotate-y');
    camRotSliderY.addEventListener('input', function() {
        if (currentObject) {
            camera.updateRotationY(camRotSliderY.value);
            render();
        }
    });
    let camRotSliderX = document.getElementById('cam-rotate-x');
    camRotSliderX.addEventListener('input', function() {
        if (currentObject) {
            camera.updateRotationX(camRotSliderX.value);
            render();
        }
    });

    let projection = document.getElementById('projection');
    projection.addEventListener('change', function() {
        if (projection.value=="ortographic") {
            projectionMatrix = camera.ortographic();
            camera.updateTranslationZ(450* 10 / 800 - 5);
            document.getElementById('cam-trans').value=450;
        } else if (projection.value=="oblique") {
            projectionMatrix = null;
        } else if (projection.value=="perspective") {
            projectionMatrix = null;
        } else {
            projectionMatrix = projMat;
        }
        render();
    });
    // ===================================================
    render();

    function render() {
        if (currentObject) {
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
        
            const objMat = currentObject.calculateObjectMat();
            const modelView = camera.calculateModelView();

            gl.uniformMatrix4fv(objMatLoc, false, new Float32Array(objMat));
            gl.uniformMatrix4fv(modViewLoc, false, new Float32Array(modelView));
            gl.uniformMatrix4fv(projLoc, false, new Float32Array(projectionMatrix));
        
            gl.drawArrays(gl.TRIANGLES, 0, currentObject.nVertices);
            // console.log(projectionMatrix);
        }
    }
}
main();