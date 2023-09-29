const col = document.querySelector('.col');
const colors = document.querySelectorAll('.wrapper input');
const textarea = document.querySelector('textarea');
const refresh = document.querySelector('.refresh');
const copy = document.querySelector('.copy');
const select = document.querySelector('select');


const getRandomHex = () =>{
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}


const generateGradient = (isRandom) =>{
    if(isRandom){
        colors[0].value = getRandomHex();
        colors[1].value = getRandomHex();
    }
    const gradient = `linear-gradient(${select.value}, ${colors[0].value},${colors[1].value})`;
    col.style.background = gradient;
    // console.log(gradient);
    textarea.value = `background: ${gradient};`;
}
colors.forEach(input =>{
    input.addEventListener("input", () => generateGradient(false));
});


const copyCode =() =>{
    navigator.clipboard.writeText(textarea.value);
    copy.innerText = 'Code Copied';
    setTimeout(()=> copy.innerText = 'Code Code', 1000);
}


select.addEventListener("change",() => generateGradient(false));
refresh.addEventListener("click", () => generateGradient(true));
copy.addEventListener('click', copyCode);