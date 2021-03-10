/**
 * Turning ON or OFF shading
 */
function turnOnOffShading() {
    var shadingButton = document.getElementById('shading-button');
    var currShading = shadingButton.innerHTML;

    if (currShading == "Shading OFF") {
        shadingButton.innerHTML = "Shading ON";
        // TODO : do something here
    }
    else if (currShading == "Shading ON") { 
        shadingButton.innerHTML = "Shading OFF";
        // TODO : do something here
    }
}

/**
 * Save geometry model to an external file
 */
function save() {

}

/**
 * Load geometry model from an external file
 */
function load() {

}

/**
 * Draw selected geometry model
 */
function draw() {

}

/**
 * Open help
 */
function help() {

}