const text = document.querySelector('.chnage');


const textLoad = () =>{
    setTimeout(() => {
        text.textContent = 'Ritesh'
    }, 0);
    setTimeout(() => {
        text.textContent = 'Freelancer'
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Wordpress Developer'
    }, 8000);
    setTimeout(() => {
        text.textContent = 'Front-end Developer'
    }, 12000); // 1s = 1000ms;
}
textLoad();
setInterval(textLoad, 16000);