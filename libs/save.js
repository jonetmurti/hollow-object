function save(hollow) {
    let data = {
        vertices: hollow.vertices,
        matrices: {
            scale: hollow.scale,
            rotationY: hollow.rotationY,
            rotationX: hollow.rotationX,
            rotationZ: hollow.rotationZ,
            translation: hollow.translation
        }
        // TODO : Color data
    };
    let jsonData = JSON.stringify(data);

    var filename = prompt("filename:", "data");
    if (filename == null){
        filename = "data";
    }

    var file = new Blob([jsonData], {
        type : "application/json"
    });

    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = filename + ".json";
    a.click();
}