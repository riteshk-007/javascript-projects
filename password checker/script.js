var password = document.getElementById('password');
var btn = document.getElementById('btn');
var msg = document.getElementById('message');

password.addEventListener('input',()=>{
    if(password.value.length > 0){
        msg.style.display = "block"
    }else{
        msg.style.display = "none";
    }
    if(password.value.length < 4){
        msg.innerHTML = "password is weak"
        msg.style.color = "red"
        password.style.borderColor = "red"
    }
    if(password.value.length >= 4 && password.value.length < 8){
        msg.innerHTML = "password is medium"
        msg.style.color = "orange"
        password.style.borderColor = "orange"
    }
    if(password.value.length >= 8){
        msg.innerHTML = "password is strong"
        msg.style.color = "green"
        password.style.borderColor = "green"
    }
})
btn.addEventListener('click',()=>{
    password.value = "";
    password.style.borderColor = "";
     msg.style.display = "none";
})
