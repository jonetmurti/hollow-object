/**
 * Change shown slider value
 * @param {number} idx
 */
function changeValSlider(idx) {
    var slider = document.getElementsByClassName('slider')[idx];
    var sliderVal = document.getElementsByClassName('slider-val')[idx];
    sliderVal.innerHTML = slider.value;
}