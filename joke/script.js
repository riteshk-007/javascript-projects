
    const box = document.querySelector('.box');
    const btn = document.querySelector('.btn');

const store = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";

let getjoke  = () =>{
    box.classList.remove('active');
    fetch(store)
    .then(data => data.json())
    .then(item => {
        box.textContent = `${item.joke}`;
        box.classList.add('active');
    });
}

btn.addEventListener('click',getjoke);
getjoke();