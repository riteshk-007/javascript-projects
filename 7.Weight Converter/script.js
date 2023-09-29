let kg = document.getElementById('kg');
let pound = document.getElementById('pound');

kg.addEventListener('click', ()=>{
    let input = document.getElementById('input').value;
     document.getElementById('output').value = input / 2.205 + " Kg";
})

pound.addEventListener('click', ()=>{
    let input = document.getElementById('input').value;
     document.getElementById('output').value = input * 2.205 + " Pound";
})