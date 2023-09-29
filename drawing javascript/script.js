const canvas  = document.getElementById('canvas');
const colorButton =  document.getElementById('color');
const clearButton = document.getElementById('Clearbtn');
const save = document.getElementById('save');
const erasebtn = document.getElementById('erasebtn');
const penSlider = document.getElementById('pen-slider');
const h3 = document.querySelector('h3');




let isDwawing = false;

ctx = canvas.getContext('2d');


// set canvas background is white 
const canvasBackground = () =>{
   ctx.fillStyle = "#fff";
   ctx.fillRect(0,0, canvas.width, canvas.height);
}




// set canvas height and width
window.addEventListener("load", () =>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvasBackground();
})




// change line color 
colorButton.addEventListener('change', ()=>{
    ctx.strokeStyle= colorButton.value;
})




//start drawing
const startDraw = () =>{
    isDwawing = true;
    ctx.beginPath();
    ctx.lineWidth = penSlider.value;
}



// erase drawing
erasebtn.addEventListener('click', ()=>{
    ctx.strokeStyle= "#fff";
})



// clear all drawing
clearButton.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasBackground();
    ctx.strokeStyle= "#000";
})



// work draw line 
const drawing = (e) => {
    if(!isDwawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}


// slide value 
penSlider.addEventListener('change', ()=>{
    h3.innerText = penSlider.value;

})

// save drawing in Image 
save.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `${Date.now()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
})



canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', ()=> isDwawing =false);