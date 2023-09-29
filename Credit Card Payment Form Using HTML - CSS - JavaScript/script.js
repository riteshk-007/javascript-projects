document.querySelector('.cardNumber-input').oninput =  () =>{
    document.querySelector('.cardNumber').innerText = document.querySelector('.cardNumber-input').value;
}
document.querySelector('.cardHolder').oninput =  () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.cardHolder').value;
}
document.querySelector('.month').oninput =  () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month').value;
}
document.querySelector('.year').oninput =  () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year').value;
}
document.querySelector('.cvv').onmouseenter =  () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvv').onmouseleave =  () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvv').oninput =  () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv').value;
}