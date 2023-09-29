let meter = document.getElementById('meter');
let feet = document.getElementById('feet');

meter.addEventListener('click', ()=>{
    let input = document.getElementById('input').value;
     document.getElementById('output').value = input / 3.281 + " Meter";
    // output = input / 3.281 + "Meter";
})

feet.addEventListener('click', ()=>{
    let input = document.getElementById('input').value;
     document.getElementById('output').value = input * 3.281 + " Feet";
    // output = input / 3.281 + "Meter";
})