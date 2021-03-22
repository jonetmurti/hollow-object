precision mediump float;

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
}