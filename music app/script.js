function menu() {
    var slideMenu = document.querySelector('.menu-bar');
    slideMenu.classList.toggle('active');
}

let songs = [
    {
        sound: 'music1',
        title: 'chammak challo'

    },
    {
        sound: 'music2',
        title: 'Ji Huzoor'
    },
    {
        sound: 'music3',
        title: 'Manika'
    },
    {
        sound: 'music4',
        title: 'kesariya'
    },
    {
        sound: 'music5',
        title: 'Deva Deva'
    },
];


//  <------------------play pause button ------------------>

const music = document.querySelector("audio");
const playPause = document.querySelector('.playPause');
const faPlay = document.querySelector('.fa-play');
const img = document.querySelector("img");
const title = document.getElementById('title');


let isplayed = false;


// for play Music  


const playMusic = () => {
    isplayed = true;
    music.play();
    faPlay.classList.replace('fa-play', 'fa-pause');
    document.body.classList.add('active');
};

// for pause music

const pauseMusic = () => {
    isplayed = false;
    music.pause();
    faPlay.classList.replace('fa-pause', 'fa-play');
    document.body.classList.remove('active');
};


playPause.addEventListener('click', () => {
    if (isplayed) {
        pauseMusic();
    } else {
        playMusic();
    }
});
// <---------changing data --------> 


const nxt = document.querySelector('.nxt');
const pre = document.querySelector('.pre');


const loadSongs = (songs) => {
    title.textContent = songs.title;
    music.src = '/music/' + songs.sound + '.mp3';
    img.src = '/poster/' + songs.title + '.jpeg';
}

// <--next and previous button ---->

index = 0;

const nextsong = () => {
    index = (index + 1) % songs.length;
    loadSongs(songs[index]);
    playMusic();
}


const backsong = () => {
    index = (index - 1 % songs.length) % songs.length;
    loadSongs(songs[index]);
    pauseMusic();
}

nxt.addEventListener('click', nextsong);
pre.addEventListener('click', backsong);

music.addEventListener('ended', nextsong);

//progress bar 

music.addEventListener('timeupdate', (event) =>{
    const {currentTime, duration} = event.srcElement;
    let progressBar = ( currentTime / duration ) * 100;
    var slide  = document.querySelector('.slide');

    slide.style.width = `${progressBar}%`;
})


// progressBar onclick function 

const musicRange = document.querySelector('.musicRange');

musicRange.addEventListener('click', (event)=>{
    const {duration} = music;

    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
})