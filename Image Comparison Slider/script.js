const slider = document.querySelector(".slider input");
const drag = document.querySelector(".drag");
const img = document.querySelector(".image .img-2");

slider.oninput  = ()=>{
    let sliderVal = slider.value;
    drag.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}