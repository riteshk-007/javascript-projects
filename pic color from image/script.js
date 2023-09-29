const button = document.querySelector('button');


const pickColor = async () =>{
    const eyeDropper =  new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();

    navigator.clipboard.writeText(sRGBHex);
    alert(`Color Hex Value Copy In Clipboard. ${sRGBHex}`);
}


button.addEventListener('click', pickColor)