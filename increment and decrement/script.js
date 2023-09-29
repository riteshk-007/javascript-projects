var add = document.querySelector('#increment');
var mainus = document.querySelector('#decrement');

var screen = document.querySelector('#number');


let a =0;

add.addEventListener('click',()=>{
    a++;
    // a = (a<10) ? "0" + a :a;
   screen.value = a;
})
mainus.addEventListener('click',()=>{
        if(a > 1){
            a--;
            // a= (a < 10) ? "0" + a : a;
            screen.value = a;
        }
})