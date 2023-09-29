let btn = document.getElementById('btn');
let output = document.getElementById('output');


btn.addEventListener('click',()=>{
    let word =  document.getElementById('word').value;
    output.innerHTML = word.length;
})