let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    let price = document.querySelector('#price').value;
    let person = document.querySelector('#person').value;
    let total = document.querySelector('.total');
    let head = document.querySelector('.head');
    total.innerHTML = `Amount : ${price}`;
    head.innerHTML = `Person : ${person}`;
    total.style.background = 'greenyellow';
    head.style.background = 'greenyellow';

    let result  = document.querySelector('.result');
        if(price === ''|| price <="0"){
            result.innerHTML += `<p>Bill amount cannot be blank</p>`;
        }
        else{
            result.innerHTML = `Per Head : ₹ ${price / person}`;
        }
        if(person <= "0"){
            result.innerHTML += `<p>Number of users must be greater than zero</p>`;
        }
        price == '';

        setInterval(() => {
            price = "";
            person = "";
            result.innerHTML = "";
        }, 10000);
})