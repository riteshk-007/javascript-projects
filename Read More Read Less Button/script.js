var content = document.getElementById('content');
var btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    if(content.className == "open"){
        //shrink the box
        content.className = "";
        btn.innerHTML = "SHOW MORE";
    } else {
        //expand the box
        content.className = "open";
        btn.innerHTML = "SHOW LESS";
    }
})