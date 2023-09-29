let btn =  document.getElementById("add");
let list =  document.getElementById("list");
let inputtext =  document.getElementById("inputtext");


btn.addEventListener('click',()=>{
    var peragraph = document.createElement('p');
    peragraph.classList.add("gaping");
    peragraph.innerText = inputtext.value;
    list.append(peragraph);
    inputtext.value = "";
    peragraph.addEventListener('click',()=>{
        peragraph.style.textDecoration = "line-through";
    })
    peragraph.addEventListener('dblclick',()=>{
        list.removeChild(peragraph);
    })
})