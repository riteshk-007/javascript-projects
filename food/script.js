// autometic change photos 

let img = document.getElementById('img');

let images = ['food1.png', 'food2.png', 'food3.png', 'food4.png', 'food5.png'];

setInterval(() => {
    let random = Math.floor(Math.random() * 5);
    img.src = images[random];
}, 2500);


// create  carousel 

let wrapper = [...document.querySelectorAll('.wrapper')];

let nxt = [...document.querySelectorAll('.next')];
let pre = [...document.querySelectorAll('.pre')];

wrapper.forEach((item, i) => {
    let wrapperDemensions = item.getBoundingClientRect();
    let wrapperWidth = wrapperDemensions.width;

    nxt[i].addEventListener('click', () => {
        item.scrollLeft += wrapperWidth - 10;
    })
    pre[i].addEventListener('click', () => {
        item.scrollLeft -= wrapperWidth + 10;
    })
})




// Fullscreen View

let cards = Array.from(document.querySelectorAll('.card img'));

cards.forEach((e) => {
    e.addEventListener('click', () => {
        // console.log(e.src)
        let container = document.querySelector('.container'),
            viewImg = container.querySelector('img');

        viewImg.src = e.src;

        container.classList.add("show")

        let icon = document.querySelector('.container ion-icon');
        console.log(icon)

        icon.onclick = () => {
            container.classList.remove("show");
        }


    })
})


// cart button 

let cart = document.querySelector('.cart');

cart.addEventListener('click', ()=>{
    // console.log(cart);
    let third = document.querySelector('.third');
    third.classList.add('active');
    

})
let cartItem = document.querySelector('.cart-item ion-icon');

cartItem.addEventListener('click', ()=> {
    let third = document.querySelector('.third');
    third.classList.remove('active');
})




// counter control

// let added = document.querySelector('.add');
// let removed = document.querySelector('.remove');
// let screen = document.querySelector('.display');


// let isDisplay = 1;

// added.addEventListener('click', ()=> {
//     isDisplay++;
//     screen.innerHTML = isDisplay;
// })

// removed.addEventListener('click', ()=>{
//     if(isDisplay > 1){
//         isDisplay--;

//         screen.innerHTML = isDisplay;
//     }
// })






// // Add To Cart 
// idcard =0;
// function addToCart(){
//     idcard++;
//     // event.preventDefault()
//     let product = document.querySelector('.product');


//         //create element

//     let productItem = document.createElement('div');
//     productItem.setAttribute('id', idcard);
//     let productImg = document.createElement('img');

//     let span = document.createElement('span');
//     let box = document.createElement('div');
//     let minu = document.createElement('a');
//     let display = document.createElement('div');
//     let plus = document.createElement('a');
//     let clear = document.createElement('div');
//     clear.setAttribute('onclick', 'del('+idcard+')')
//     let i = document.createElement('i');

//         // joint element

//     productItem.appendChild(productImg);
//     productItem.appendChild(span);
//     productItem.appendChild(box);
//     box.appendChild(minu);
//     box.appendChild(display);
//     box.appendChild(plus);
//     clear.appendChild(i);
//     productItem.appendChild(clear);
//     product.appendChild(productItem)

//     // console.log(product);


//         // give class name 

//     productItem.className = "product-item";
//     span.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quod?";
//     box.className = 'box';
//     minu.className = "remove";
//     display.className = "display";
//     plus.className = "add";
//     clear.className = "delete";
//     i.className = "fa-solid fa-xmark";

    
//     minu.innerHTML = '-';
//     display.innerHTML = 0;
//     plus.innerHTML = '+';
    

// }

// function del(event){
//     document.querySelector(idcard).remove();
// }
