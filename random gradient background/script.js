const btn = document.querySelector('button');


const getColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

const generateColor = () =>{
    const color1 = getColor();
    const color2 = getColor();


    document.body.style.background = `linear-gradient(to left top, #${color1}, #${color2})`;
    document.querySelector('span').innerText = `background : linear-gradient(to left top, #${color1}, #${color2});`;
}
generateColor();
btn.addEventListener('click', generateColor);