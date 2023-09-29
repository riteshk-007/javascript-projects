var mainvideo = document.querySelector("video");
var played = document.querySelector(".play i");
var back = document.querySelector(".back");
var progressBar = document.querySelector(".progress-bar");
var next = document.querySelector(".next");
var volume = document.querySelector(".volume i");
var volumeSlider = document.querySelector("input");
var fullscreen = document.querySelector(".fullscreen i");
var container = document.querySelector(".container");
var videoTimeline = document.querySelector(".video-timeline");
var videoTime = document.querySelector(".current-time");







// <-----------video play and pause ------------------>
played.addEventListener('click',()=>{
    mainvideo.paused ? mainvideo.play() : mainvideo.pause();
});

mainvideo.addEventListener('play',()=>{
    played.classList.replace("fa-play","fa-pause");
});

mainvideo.addEventListener('pause',()=>{
    played.classList.replace("fa-pause","fa-play");
})




//  <------------next and back button---------------->
back.addEventListener('click', ()=>{
    mainvideo.currentTime -=5;
})
next.addEventListener('click', ()=>{
    mainvideo.currentTime +=5;
})
  



// <--------------progressBar------------------->
const formatTime = time =>{
    let seconds = Math.floor(time % 60),
    minutes = Math.floor(time % 60) % 60,
    hours = Math.floor(time % 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
minutes = minutes < 10 ? `0${minutes}` : minutes;
hours = hours < 10 ? `0${hours}` : hours;

if(hours == 0){
    return `${minutes}:${seconds}`;
}
return `${hours}:${minutes}:${seconds}`;
}


mainvideo.addEventListener('timeupdate', e =>{
    let {currentTime, duration} = e.target;
    let percent =(currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;
    videoTime.innerText = formatTime(currentTime);
});




// <-----------volume mute and unmute--------------------------->
volume.addEventListener("click", ()=>{
    if (!volume.classList.contains("fa-volume-high")) {
        mainvideo.volume = 0.5;
        volume.classList.replace("fa-volume-xmark","fa-volume-high");
       
    }else{
        mainvideo.volume = 0.0;
        volume.classList.replace("fa-volume-high","fa-volume-xmark");
    }
    volumeSlider.value = mainvideo.volume;
})


// <---------------volume slider---------------------->
volumeSlider.addEventListener('input', e =>{
    mainvideo.volume = e.target.value;
    if(e.target.value == 0){
        volume.classList.replace("fa-volume-high","fa-volume-xmark");
    }else{
        volume.classList.replace("fa-volume-xmark","fa-volume-high");
    }
})

// <--------------fullScreen---------------->
fullscreen.addEventListener('click',()=>{
    container.classList.toggle("fullscreen");
    if(document.fullscreenElement){
        fullscreen.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    container.requestFullscreen();
    fullscreen.classList.replace("fa-expand", "fa-compress");
})

// <----------progressBar------------------->

videoTimeline.addEventListener('click', e =>{
    let timelineWidth = videoTimeline.clientWidth;
    mainvideo.currentTime = (e.offsetX / timelineWidth) * mainvideo.duration;
})