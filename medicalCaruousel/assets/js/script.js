let left = document.querySelector(".left-icon");
let right = document.querySelector(".right-icon");
let sliderScrl = document.querySelector(".slider-scroll");

right.addEventListener("click", function(){
    let matrix = window.getComputedStyle(sliderScrl).getPropertyValue("transform");
    let matrixArr = matrix.split(", ");
    let translateXNum = parseInt(matrixArr[4]);
    if (translateXNum > -1344) {
        sliderScrl.style.transform = "translateX(" + (translateXNum - 336) + "px)";
    }
    else{
        return;
    }
})
left.addEventListener("click", function(){
    let matrix = window.getComputedStyle(sliderScrl).getPropertyValue("transform");
    let matrixArr = matrix.split(", ");
    let translateXNum = parseInt(matrixArr[4]);
    if (translateXNum < 0) {
        sliderScrl.style.transform = "translateX(" + (translateXNum + 336) + "px)";
    }
    else{
        return;
    }
})