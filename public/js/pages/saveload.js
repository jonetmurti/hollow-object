import Hollow from '../classes/Hollow.js';

window.save = function save() {
    let object = window.currentObject; // TODO : set object value from a global hollow object
    
    let data = {
        index: object.index,
        vertices: object.vertices,
        normals: object.normals,
        color: object.color,
        matrices: {
            scale: object.scale,
            rotationY: object.rotationY,
            rotationX: object.rotationX,
            rotationZ: object.rotationZ,
            translation: object.translation
        }
    };
    var jsonObj = JSON.stringify(data, null, 4);
    var filename = "hollow-object";

    var fileBlob = new Blob([jsonObj], {
        type: "application/json"
    });

    var a = document.createElement('a');
    a.setAttribute('href', window.URL.createObjectURL(fileBlob));
    a.setAttribute('download', filename + ".json");
    a.click();
}

/**
 * Load an external .json file
 */
window.load = function load() {
    let inputFile = document.getElementById('load-file');

    inputFile.click();
}

/* Deprecated
window.loadFile = function loadFile(elmt) {
    var files = elmt.files[0];

    if (files) {
        var reader = new FileReader();
        reader.readAsText(files);

        reader.onload = function() {
            var txtFile = reader.result;
            var fileData = JSON.parse(txtFile);

            var index = fileData.index;
            var vertices = fileData.vertices;
            var normals = fileData.normals;
            var matrices = fileData.matrices;

            document.getElementById('hollow').selectedIndex = index;

            window.currentObject = new Hollow(index, vertices, normals);
            window.currentObject.loadMatrices(matrices);

            // TODO : render object here
        }
    }
}*/