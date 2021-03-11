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
function draw() {
    var itemSelect = document.getElementsByClassName('select')[0];
    var shadingBtn = document.getElementById('shading-button');
    
    var item = itemSelect.value;
    // TODO : draw item here
}