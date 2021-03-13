var cubeRotation = 0.0;

main();

//
// Start here
//
function main() {
  const canvas = document.querySelector("#glcanvas");
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  // If we don't have a GL context, give up now

  if (!gl) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // Vertex shader program
}
