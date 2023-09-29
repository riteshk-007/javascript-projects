const box = document.querySelector('.box'),
btn = box.querySelector('.form button'),
qrinput = box.querySelector('.form input'),
code = box.querySelector('.code img');


btn.addEventListener('click', ()=>{
    let qrvalue = qrinput.value;
    if(!qrvalue) return;
    btn.innerText = "Generating QR code..";
    code.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    code.addEventListener('load',()=>{
        box.classList.add('active');
        btn.innerText = "Generate QR code";
    })
})

qrinput.addEventListener('keyup',()=>{
    if(!qrinput.value){
        box.classList.remove('active');
    }
})