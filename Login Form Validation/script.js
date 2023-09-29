

function valid(){
    var password = document.getElementById('password').value;

    if(password.length < 8 || password.length >= 20){
     document.getElementById('msg').innerHTML = "Minimum 8 characters";;
        return false;
    }else{
        document.getElementById('msg').innerHTML = "";
    }

}



function change(){
    var password = document.getElementById('password');
    if(password.type === "password"){
        password.type = "text";
        document.getElementById("showimg").src = "open.png";
    }else{
        password.type = "password";
       document.getElementById("showimg").src =  "close.png";
   }

}

function get(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    localStorage.setItem("username", name);
    localStorage.setItem("password1",password);
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
}