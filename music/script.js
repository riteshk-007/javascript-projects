const play = document.getElementById('play');
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const back = document.getElementById('back');
const next = document.getElementById('next');



const songs = [{
    name: "song1",
    title: "Pyaar Pyaar",
    artist: "Dino James",

},
{
    name: "song2",
    title: "Excuses",
    artist: "Ap Dhillon",

},
{
    name: "song3",
    title: "Liggi",
    artist: "Ritviz",

},
{
    name: "song4",
    title: "Kahani",
    artist: "Mohan Kannan",

},
{
    name: "song5",
    title: "Lover",
    artist: "Diljit Dosanjh",

},
{
    name: "song6",
    title: "The Monster",
    artist: "Adithi Sagar",

},
];

let isplay = false;

//  for play function

const playmusic = () => {
    isplay = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");

};
//  for pause function

const pausemusic = () => {
    isplay = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");

};

play.addEventListener("click", () => {
    if (isplay) {
        pausemusic();
    } else {
        playmusic();
    }
});

//Changing Music Data
const loadsongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "/mp3/" + songs.name + ".mp3";
    img.src = "/image/" + songs.name + ".jpg";

}


songIndex = 0;

const nextsong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadsongs(songs[songIndex]);
    playmusic();
}

const backsong = () => {
    songIndex = (songIndex - 1 % songs.length) % songs.length;
    loadsongs(songs[songIndex]);
    pausemusic();
}
next.addEventListener('click', nextsong);
back.addEventListener('click', backsong);