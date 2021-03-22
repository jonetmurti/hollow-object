import Camera from './classes/Camera.js';
import Hollow from './classes/Hollow.js';
import { hollowCubic, normalHollowCubic } from './objects/hollow-cube.js';
import { hollowLimas, limasNormals } from './objects/hollow-pyramid.js';
import { hollowPrism, prismNormal } from './objects/hollow-prism.js';
import { cube, cubeNormals } from './objects/cube.js';

window.run = function run() {
    var vertText = `precision mediump float;

    attribute vec3 vertPos;
    attribute vec3 normal;
    varying vec3 vNormal;
    varying vec3 fragPos;
    uniform mat4 objMat;
    uniform mat4 modelViewMat;
    uniform mat4 projMat;

    void main() {
        vNormal = (objMat * vec4(normal, 0.0)).xyz;
        fragPos = (objMat * vec4(vertPos, 1.0)).xyz;
        gl_Position = projMat * modelViewMat * objMat * vec4(vertPos, 1.0);
    }`;
    var fragText = `precision mediump float;

    varying vec3 vNormal;
    varying vec3 fragPos;
    uniform vec3 viewPos;

    void main() {
        vec3 normalizedNormal = normalize(vec3(vNormal.xy, -1.0*vNormal.z));
        vec3 lightColor = vec3(1.0, 1.0, 1.0);
        vec3 lightPos = vec3(-1, 1, 1);
        vec3 lightDirection = normalize(lightPos - fragPos);

        vec3 ambient = 0.5 * lightColor;

        vec3 diffuse = 0.5 * max(dot(normalizedNormal, lightDirection), 0.0) * lightColor;

        vec3 reflected = reflect(-lightDirection, normalizedNormal);
        vec3 normalizedViewDir = normalize(viewPos - fragPos);
        float spec = pow(max(dot(reflected, normalizedViewDir), 0.0), 32.0);
        vec3 specular = 0.5 * spec * lightColor;

        vec3 totalIntensity = ambient + diffuse + specular;

        vec3 defaultColor = vec3(1.0, 0.0, 0.0);

        gl_FragColor = vec4(totalIntensity * defaultColor, 1.0);
    }`;

    var canvas = document.getElementById('gl-canvas');

    canvas.width = 600;
    canvas.height = 600;

    var gl = canvas.getContext('webgl');
    if (!gl) {
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertText);
    gl.shaderSource(fragmentShader, fragText);

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
    
    // ===================================================

    // ================= OBJECT & CAMERA =====================
    var camera = new Camera(gl.canvas.width, gl.canvas.height);
    window.currentObject = null;
    var projectionMatrix = camera.perspective;
    // =======================================================

    // =============== BUFFERS ===========================
    gl.useProgram(program);

    var positionBuf = gl.createBuffer();
    var normalBuf = gl.createBuffer();
    // ===================================================

    // ============= Load File ===========================
    var fileReader =  new FileReader()

    // document.getElementById("load-button").addEventListener("change", function(){
    //     if (this.files[0]){
    //         fileReader.readAsText(this.files[0]);
    //     }
    // });
    
    fileReader.onload = function(){
        data = JSON.parse(fileReader.result);
        window.currentObject = new Hollow(data.vertices);
        window.currentObject.loadMatrices(data.matrices);
        // TODO : Load Color
        render();
        document.getElementById('hollow').value = '';
    };
    // ===================================================

    // =============== CHOOSE OBJECT ===========================
    var selectObject = document.getElementById('hollow');
    selectObject.addEventListener('change', function() {
        if (selectObject.value=="limas") {
            window.currentObject = new Hollow(1, hollowLimas, limasNormals);
        } else if (selectObject.value=="kubus") {
            window.currentObject = new Hollow(2, hollowCubic, normalHollowCubic);
        } else if (selectObject.value=="prisma") {
            window.currentObject = new Hollow(3, hollowPrism, prismNormal);
        } else {
            window.currentObject = new Hollow(0, cube, cubeNormals);
        }
        render();
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
        window.currentObject.reset();
        camera.updateDefault();
        projectionMatrix = camera.perspective();
        document.getElementById('projection').value="perspective";
        render();
    });

    var positionLoc = gl.getAttribLocation(program, 'vertPos');
    var normalLoc = gl.getAttribLocation(program, 'normal');
    var objMatLoc = gl.getUniformLocation(program, 'objMat');
    var modViewLoc = gl.getUniformLocation(program, 'modelViewMat');
    var projLoc = gl.getUniformLocation(program, 'projMat');
    var viewPosLoc = gl.getUniformLocation(program, 'viewPos');
    // ===================================================

    // ================ EVENT HANDLER ====================
    // Save file
    // document.getElementById("save-button").addEventListener("click", function() {
    //     if (window.currentObject) {
    //         save(window.currentObject);
    //     }
    // });

    let xSlider = document.getElementById('x-trans');
    xSlider.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateTranslationX(xSlider.value * 2 / gl.canvas.width - 1);
            render();
        }
    });

    let ySlider = document.getElementById('y-trans');
    ySlider.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateTranslationY(ySlider.value * 2 / gl.canvas.height - 1);
            render();
        }
    });

    let zSlider = document.getElementById('z-trans');
    zSlider.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateTranslationZ(zSlider.value * -2 / 800 + 1);
            render();
        }
    });

    let rotSlider = document.getElementById('y-rotate');
    rotSlider.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateRotationY(rotSlider.value);
            render();
        }
    });

    let rotSlider_x = document.getElementById('x-rotate');
    rotSlider_x.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateRotationX(rotSlider_x.value);
            render();
        }
    });

    let rotSlider_z = document.getElementById('z-rotate');
    rotSlider_z.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateRotationZ(rotSlider_z.value);
            render();
        }
    });

    let scaleSlider = document.getElementById('obj-scale');
    scaleSlider.addEventListener('input', function() {
        if (window.currentObject) {
            window.currentObject.updateScale(scaleSlider.value/360);
            render();
        }
    });

    let camTranSlider = document.getElementById('cam-trans');
    camTranSlider.addEventListener('input', function() {
        if (window.currentObject) {
            camera.updateTranslationZ(camTranSlider.value * 10 / 800 - 5);
            render();
        }
    });

    let camRotSliderY = document.getElementById('cam-rotate-y');
    camRotSliderY.addEventListener('input', function() {
        if (window.currentObject) {
            camera.updateRotationY(camRotSliderY.value);
            render();
        }
    });
    let camRotSliderX = document.getElementById('cam-rotate-x');
    camRotSliderX.addEventListener('input', function() {
        if (window.currentObject) {
            camera.updateRotationX(camRotSliderX.value);
            render();
        }
    });

    let projection = document.getElementById('projection');
    projection.addEventListener('change', function() {
        if (projection.value=="ortographic") {
            //Reset First
            window.currentObject.reset();
            camera.updateDefault();
            projectionMatrix = camera.ortographic();
            camera.updateTranslationZ(450* 10 / 800 - 5);
            document.getElementById('cam-trans').value=450;
        } else if (projection.value=="oblique") {
            window.currentObject.reset();
            camera.updateDefault();
            projectionMatrix = camera.oblique();
        } else if (projection.value=="perspective") {
            window.currentObject.reset();
            camera.updateDefault();
            projectionMatrix = camera.perspective();
        }
        render();
    });

    // turn on shading
    // ===================================================
    render();

function render() {
        if (window.currentObject) {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            gl.enable(gl.CULL_FACE);

            // gl.enable(gl.DEPTH_TEST);

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(window.currentObject.vertices), gl.STATIC_DRAW);
            gl.vertexAttribPointer(
                positionLoc,
                3,
                gl.FLOAT,
                gl.FALSE,
                3 * Float32Array.BYTES_PER_ELEMENT,
                0
            );
            gl.enableVertexAttribArray(positionLoc);

            gl.bindBuffer(gl.ARRAY_BUFFER, normalBuf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(window.currentObject.normals), gl.STATIC_DRAW);
            gl.vertexAttribPointer(
                normalLoc,
                3,
                gl.FLOAT,
                gl.FALSE,
                3 * Float32Array.BYTES_PER_ELEMENT,
                0
            );
            gl.enableVertexAttribArray(normalLoc);
        
            const objMat = window.currentObject.calculateObjectMat();
            const modelView = camera.calculateModelView();

            gl.uniformMatrix4fv(objMatLoc, false, new Float32Array(objMat));
            gl.uniformMatrix4fv(modViewLoc, false, new Float32Array(modelView));
            gl.uniformMatrix4fv(projLoc, false, new Float32Array(projectionMatrix));
            gl.uniform3fv(viewPosLoc, new Float32Array(camera.calculateEye()));

            gl.drawArrays(gl.TRIANGLES, 0, window.currentObject.nVertices);
        }
    }
}

function main() {
    textLoader('../shaders/vertex.glsl', function(...args) {
        if (args[0]) { // Error
            console.error(args[0]);
        } else {
            var vertText = args[1];
            textLoader('../shaders/fragment.glsl', function(...args) {
                if (args[0]) {
                    console.error(args[0]);
                } else {
                    var fragText = args[1];
                    run(vertText, fragText);
                }
            });
        }
    });
}