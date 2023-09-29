var pera = document.getElementById('pera');

// font family

function change() {
    var font = document.getElementById('select').value;


    switch (font) {
        case "arial":
            pera.style.fontFamily = "arial";
            break;
        case "cambria":
            pera.style.fontFamily = "cambria";
            break;
        case "monospace":
            pera.style.fontFamily = "monospace";
            break;
        case "georgia":
            pera.style.fontFamily = "georgia";
            break;
        case "default":
            pera.style.fontFamily = "";
            break;

    }
}

// font Size

var slider = document.getElementById('slider');
var size = document.getElementById('size');
size.innerHTML = slider.value;

slider.oninput = function(){
    size.innerHTML = this.value;
    var num = this.value;
    pera.style.fontSize = num + "px";
}


//Font color

var blue = document.getElementById('blue');
var green = document.getElementById('green');
var red = document.getElementById('red');
var black = document.getElementById('black');

blue.addEventListener('click',()=>{
    pera.style.color = "blue";
})
green.addEventListener('click',()=>{
    pera.style.color = "green";
})
red.addEventListener('click',()=>{
    pera.style.color = "red";
})
black.addEventListener('click',()=>{
    pera.style.color = "black";
})

// font style 

var normal = document.getElementById('normal');
var cursive = document.getElementById('cursive');
var light = document.getElementById('light');
var bold = document.getElementById('bold');


normal.addEventListener('click',()=>{
    pera.style.fontStyle = "normal";
})

cursive.addEventListener('click',()=>{
    pera.style.fontStyle = "italic";
})
light.addEventListener('click',()=>{
    pera.style.fontWeight = "lighter";
})
bold.addEventListener('click',()=>{
    pera.style.fontWeight = "bold";
})