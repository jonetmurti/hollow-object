/**
 * Turning ON or OFF shading
 */
function turnOnOffShading() {
    var shadingButton = document.getElementById('shading-button');
    var currShading = shadingButton.innerHTML;

    if (currShading == "Shading OFF") {
        shadingButton.innerHTML = "Shading ON";
        // TODO : do something here, maybe
    }
    else if (currShading == "Shading ON") { 
        shadingButton.innerHTML = "Shading OFF";
        // TODO : do something here, maybe
    }
}

/**
 * Draw selected item
 */
function main() {
    var itemSelect = document.getElementsByClassName('select')[0];
    var shadingBtn = document.getElementById('shading-button');

    var canvas = document.getElementById('gl-canvas');
    var gl = canvas.getContext('webgl');
    if (!gl) {
        return;
    }

    const r = 162 / 255;
    const g = 210 / 255;
    const b = 255 / 255;
    gl.clearColor(r, g, b, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var item = itemSelect.value;
    // TODO : draw item here
}

main();