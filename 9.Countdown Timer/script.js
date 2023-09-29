var start = document.getElementById('start');
var reset = document.getElementById('reset');


var h = document.getElementById('hour');
var m = document.getElementById('minutes');
var s = document.getElementById('seconds');

var music = document.querySelector('audio')


var startTimer = 0;

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        music.play();

    }else if(s.value != 0){
        s.value--;
    }else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    }else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}


function stopTimer(){
    clearInterval(startTimer);
}



start.addEventListener('click', ()=>{
    // initialize the variable startTimer
    
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        },1000)
       
    }
    startInterval()
})
reset.addEventListener('click', ()=>{
   h.value = 0;
   m.value = 0;
   s.value = 0;
   stopTimer();
})