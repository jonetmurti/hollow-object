function textLoader(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url + '?' + Math.random());
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(null, this.responseText);
            } else {
                callback('ERROR : cannot get data from ' + url);
            }
        }
    }
    request.send();
}