let remove = document.getElementById('remove');
let add = document.getElementById('add');
let display = document.getElementById('display');

let number = 0;


add.addEventListener('click', ()=>{
    number +=1;
    display.innerHTML = number;
})
remove.addEventListener('click', ()=>{
    number -=1;
    display.innerHTML = number;
})