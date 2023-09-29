const btn  = document.querySelector('.btn');
const ul = document.querySelector('ul');


// let putValue = prompt('How many colors box you want ?');

const maxPaletteBoxes = 21;
const generatePalette = () => {
    ul.innerHTML = "";
     for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="item" style="background: ${randomHex}"></div>
                             <span class="name">${randomHex}</span>`;

        color.addEventListener("click", ()=> copyColor(color, randomHex));
        ul.appendChild(color);
     }
 
}
generatePalette();

const copyColor = (elem, hexVal) =>{
    const colorElement = elem.querySelector('.name');
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = 'Copied'; 
        // console.log(hexVal);
        setTimeout(() => {
            colorElement.innerText = hexVal;
        }, 1000);
    }).catch(() => alert("Failed to copy color code!"));
}

btn.addEventListener('click', generatePalette);
