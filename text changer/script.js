const up = document.getElementById('up');
const low = document.getElementById('low');
const cap = document.getElementById('cap');
const clear = document.getElementById('clear');
const under = document.getElementById('under');
const text = document.getElementById('text');

up.addEventListener('click',()=>{
        text.style.textTransform = 'uppercase';
});
low.addEventListener('click',()=>{
        text.style.textTransform = 'lowercase';
});
cap.addEventListener('click',()=>{
        text.style.textTransform = 'capitalize';
});
clear.addEventListener('click',()=>{
        text.value = '';
});
under.addEventListener('click',()=>{
        text.style.textDecoration = 'underline';
})