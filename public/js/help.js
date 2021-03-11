/**
 * Clear help textarea
 */
function clearHelp() {
    var helpTextArea = document.getElementById('info-text');
    helpTextArea.innerHTML = "";
}

/**
 * Open help for given tab
 * @param {string} text, name of tab
 */
function openHelpTab(text) {
    var helpTextArea = document.getElementById('info-text');

    var fileName = 'tab-' + text + '.txt';
    
    var fileReq = new XMLHttpRequest();
    fileReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            helpTextArea.innerHTML = this.responseText;
        }
    };

    fileReq.open("GET", "file?filename="+fileName);
    fileReq.send();
}

/**
 * Close help modal
 */
function closeHelp() {
    var helpModal = document.getElementById('help-modal');
    helpModal.style.display = "none";
}

/**
 * Open help modal
 */
function help() {
    var helpModal = document.getElementById('help-modal');

    helpModal.style.display = 'block';

    clearHelp();
}