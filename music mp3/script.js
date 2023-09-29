
      // select all Element

const bImg = document.querySelector('.card img');
const pre = document.querySelector('.pre');
const pausePlay = document.querySelector('.pausePlay');
const nxt = document.querySelector('.nxt');
const progressBar = document.querySelector('.progressBar');
const progress = document.querySelector('.progress');
const title = document.querySelector('#title');
const pop = document.querySelector('audio');

    // pop.play();

let accsess = [
    {
        image : 'img1',
        title : 'Pyaar Pyaar',
        music : 'song1'
    },
    {
        image : 'img2',
        title : 'Deva Deva',
        music : 'song2'
    },
    {
        image : 'img3',
        title : 'kesariya',
        music : 'song3'
    },
]

let played = 0;

    // for play 

const playMusic = () =>{
    played = 1;
    pop.play();
    pausePlay.classList.replace('fa-play', 'fa-pause');
}

    // for pause 

const pauseMusic = () =>{
    played = 0;
    pop.pause();
    pausePlay.classList.replace('fa-pause','fa-play');
}

pausePlay.addEventListener('click', ()=>{
   if(played){
        pauseMusic();
   }else{
    playMusic();
   }
    
})



    // changing music data
  
const loadSong = (accsess) =>{
    title.textContent = accsess.title;
    pop.src = "/music/" + accsess.music + ".mp3";
    bImg.src = '/img/' + accsess.image + '.jpeg';

}

index = 0;

    // next click

const nextSong = ()=>{
    index = (index + 1) % accsess.length;
    loadSong(accsess[index]);
    playMusic();
}


    // previous click

const backSong = () =>{
    index = (index - 1 % accsess.length) % accsess.length;
    loadSong(accsess[index]);
    pauseMusic();
}

nxt.addEventListener('click', nextSong);
pre.addEventListener('click', backSong);

