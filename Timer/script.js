var reset = document.querySelector('.reset');
var start = document.querySelector('.start');
var pause = document.querySelector('.pause');


var hour = document.getElementById('hour');
var minutes = document.getElementById('minutes');
var second = document.getElementById('second');

var countTimer = 0;

start.onclick = function(){
  let count = setInterval(() => {
    countTimer++;

    if(countTimer > 0){
      second.textContent = countTimer;
    }
    if(countTimer == 60){
      countTimer = 0;
      minutes.textContent++;
    }
    if(minutes.textContent == 60){
      minutes.textContent = 0;
      hour.textContent++;
    }
  }, 1000);


  pause.removeAttribute('disabled');
  reset.removeAttribute('disabled');
  start.setAttribute('disabled','disabled');

  pause.onclick = function(){
    clearInterval(count);
    start.removeAttribute('disabled');
    pause.setAttribute('disabled','disabled')
  }
  reset.onclick = function(){
    clearInterval(count);
    countTimer = 0;
    hour.textContent = 0;
    minutes.textContent = 0;
    second.textContent = 0;
  
    start.removeAttribute('disabled');
    reset.setAttribute('disabled','disabled');
    pause.setAttribute('disabled','disabled');
  }
}