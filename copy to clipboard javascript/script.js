document.querySelector('.copy').addEventListener('click',()=>{
    let input = document.querySelector('#text');
    input.select();
     document.execCommand('copy');
    let contant = document.querySelector('.contant');
     contant.innerHTML = input.value;
     input.value = "";
})

