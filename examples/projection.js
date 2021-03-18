var script  = document.createElement('script'); 
  script.src  = 'position.js'; 
  script.type = 'text/javascript'; 
  script.defer = true;
  
document.getElementsByTagName('body').item(0).appendChild(script); 
// include('position.js')

function main(hollows) {
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
        0, 0, 1, 1,
        0, 0, 0, 0
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
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
    // var selectObject = document.getElementById('hollow');
    // selectObject.addEventListener('change', function() {
    //     if (selectObject.value=="limas") {
    //         for (var j=0; j<hollows[0].length; j++) {
    //             gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hollows[0][j]), gl.STATIC_DRAW);
    //         }
    //     } else if (selectObject.value=="kubus") {
    //         for (var j=0; j<hollows[1].length; j++) {
    //             gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hollows[1][j]), gl.STATIC_DRAW);
    //         }
    //     } else {
            for (var j=0; j<hollows[1].length; j++) {
                gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hollows[1][j]), gl.STATIC_DRAW);
            }
    //     }
    // })  
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

    let rotSlider = document.getElementById('y-rotate');
    rotSlider.addEventListener('input', function() {
        const rad = degToRad(rotSlider.value);
        rotateMat = [
            Math.cos(rad), 0, -Math.sin(rad), 0,
            0, 1, 0, 0,
            Math.sin(rad), 0, Math.cos(rad), 0,
            0, 0, 0, 1
        ];

        render();
    });

    let camTranSlider = document.getElementById('cam-trans');
    camTranSlider.addEventListener('input', function() {
        camera.updateTranslationZ(camTranSlider.value * 10 / 800 - 5);
        render();
    });

    let camRotSlider = document.getElementById('cam-rotate');
    camRotSlider.addEventListener('input', function() {
        camera.updateRotationY(camRotSlider.value);
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
    
        gl.drawArrays(gl.TRIANGLES, 0, 108);
    }
}

/*Hollows adalah array keseluruhan
hollow[0] untuk limas
hollow[1] untuk kubus
hollow[2] untuk limaskubus
cube diisi semua kubus pembentuk hollow object
*/
var hollows = [];
var limas = [];
var cube = [
    // top
    -1, 1, -1,
    1, 1, -1,
    1, 1, 1,
    -1, 1, -1,
    1, 1, 1,
    -1, 1, 1,

    // bottom
    -1, -1, -1,
    1, -1, 1,
    1, -1, -1,
    -1, -1, -1,
    -1, -1, 1,
    1, -1, 1,

    //front
    -1,-1,-1,
    1,-1,-1,
    1,1,-1,
    1,1,-1,
    -1,1,-1,
    -1,-1,-1,

    //back
    -1,-1,1,
    1,1,1,
    1,-1,1,
    1,1,1,
    -1,-1,1,
    -1,1,1,
    
    // right
    1, -1, -1,
    1, -1, 1,
    1, 1, 1,
    1, -1, -1,
    1, 1, 1,
    1, 1, -1,

    // left
    -1, -1, -1,
    -1, 1, 1,
    -1, -1, 1,
    -1, -1, -1,
    -1, 1, -1,
    -1, 1, 1
];
limas.push(cube);
hollows.push(limas);


/*CUBE HOLLOW*/
var kubus= [];
var cube= [
//Cube down front
-1	,	-1	,	0	,
1	,	-1	,	0	,
1	,	-0.75	,	0	,
-1	,	-0.75	,	0	,
-1	,	-1	,	0	,
1	,	-0.75	,	0	,


1	,	-1	,	0	,
1	,	-1	,	0.25	,
1	,	-0.75	,	0.25	,
1	,	-0.75	,	0	,
1	,	-1	,	0	,
1	,	-0.75	,	0.25	,

1	,	-1	,	0.25	,
-1	,	-1	,	0.25	,
-1	,	-0.75	,	0.25	,
1	,	-0.75	,	0.25	,
1	,	-1	,	0.25	,
-1	,	-0.75	,	0.25	,

-1	,	-1	,	0.25	,
-1	,	-1	,	0	,
-1	,	-0.75	,	0	,
-1	,	-0.75	,	0.25,
-1	,	-1	,	0.25	,
-1	,	-0.75	,	0	,

-1	,	-0.75	,	0	,
1	,	-0.75	,	0	,
1	,	-0.75	,	0.25	,
-1	,	-0.75	,	0.25	,
-1	,	-0.75	,	0	,
1	,	-0.75	,	0.25,	

-1	,	-1	,	0	,
1	,	-1	,	0	,
1	,	-1	,	0.25	,
-1	,	-1	,	0.25,	
-1	,	-1	,	0	,
1	,	-1	,	0.25	,

//Cube down back
-1	,	-1	,	0.75	,
1	,	-1	,	0.75	,
1	,	-0.75	,	0.75	,
-1	,	-0.75	,	0.75	,
-1	,	-1	,	0.75	,
1	,	-0.75	,	0.75	,

1	,	-1	,	0.75	,
1	,	-1	,	1	,
1	,	-0.75	,	1	,
1	,	-0.75	,	0.75	,
1	,	-1	,	0.75	,
1	,	-0.75	,	1	,

					
1	,	-1	,	1	,
-1	,	-1	,	1	,
-1	,	-0.75	,	1	,
1	,	-0.75	,	1	,
1	,	-1	,	1	,
-1	,	-0.75	,	1	,					
					
-1	,	-1	,	1	,
-1	,	-1	,	0.75	,
-1	,	-0.75	,	0.75	,
-1	,	-0.75	,	1,	
-1	,	-1	,	1	,
-1	,	-0.75	,	0.75	,

-1	,	-0.75	,	0.75	,
1	,	-0.75	,	0.75	,
1	,	-0.75	,	1	,
-1	,	-0.75	,	1	,
-1	,	-0.75	,	0.75	,
1	,	-0.75	,	1	,

-1	,	-1	,	0.75	,
1	,	-1	,	0.75	,
1	,	-1	,	1	,
-1	,	-1	,	1	,
-1	,	-1	,	0.75	,
1	,	-1	,	1	,

];



kubus.push(cube);
hollows.push(kubus);

main(hollows);