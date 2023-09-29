// <---- left side menu --------------->


let container = document.querySelector('.container')
let toggle = document.querySelector('.toggle')

let span1 = document.querySelector('.span1')
let span2 = document.querySelector('.span2')
let span3 = document.querySelector('.span3')
let span4 = document.querySelector('.span4')
let span5 = document.querySelector('.span5')
let span6 = document.querySelector('.span6')

toggle.addEventListener('click', () => {
    container.classList.toggle('active')
    toggle.classList.toggle('active')
    span1.classList.toggle('active')
    span2.classList.toggle('active')
    span3.classList.toggle('active')
    span4.classList.toggle('active')
    span5.classList.toggle('active')
    span6.classList.toggle('active')
})

// <---- right side menu --------------->

let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation');

menu.onclick = function () {
    navigation.classList.toggle('active')
}


// <---------heart----------------------->

var  heart1 = document.querySelector('.heart1');
var  heart2 = document.querySelector('.heart2');
var  heart3 = document.querySelector('.heart3');
var  heart4 = document.querySelector('.heart4');
var  heart5 = document.querySelector('.heart5');
var  heart6 = document.querySelector('.heart6');


heart1.addEventListener('click',()=>{ heart1.classList.toggle('active')});
heart2.addEventListener('click',()=>{ heart2.classList.toggle('active')});
heart3.addEventListener('click',()=>{ heart3.classList.toggle('active')});
heart4.addEventListener('click',()=>{ heart4.classList.toggle('active')});
heart5.addEventListener('click',()=>{ heart5.classList.toggle('active')});
heart6.addEventListener('click',()=>{ heart6.classList.toggle('active')});


// <-------------Slider----------------------->

var next = [...document.querySelectorAll('#next')]
var back = [...document.querySelectorAll('#back')]
var slider = [...document.querySelectorAll('.slider')]

slider.forEach((item, i)=>{
    let sliderbox = item.getBoundingClientRect();
    let sliderWidth = sliderbox.width;

    next[i].addEventListener('click',()=>{
        item.scrollLeft += sliderWidth;
    })
    back[i].addEventListener('click',()=>{
        item.scrollLeft -= sliderWidth;
    })
})


// <-------------------scroll-------------------->

var scroller = document.querySelector('.scroll');

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 150){
        scroller.classList.add("active");
    }else{
        scroller.classList.remove("active");
    }
})


// <---------------------cart--------------------->
var cart = document.querySelector('.cart');
var cartitem = document.querySelector('.cart_item');

cart.addEventListener('click',()=>{
    cartitem.classList.toggle('active');
})

var cartBox = document.querySelector('.cart_box');




addItem = 0;
function addToCart(item){
    addItem +=1;
    var selectbox = document.createElement('div');
    selectbox.classList.add("cart_product");
    selectbox.setAttribute('id', addItem);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var naam = document.createElement('div');
    naam.innerText = item.children[1].innerText;
    naam.setAttribute('class',addItem);
    var pese = document.createElement('div');
    pese.innerText = item.children[2].innerText;
    pese.setAttribute('class',addItem);
    var delBtn = document.createElement('button');
//   delBtn.innerText = '';
  delBtn.setAttribute('onclick','del('+addItem+')');
    selectbox.append(img)
    selectbox.append(naam)
    selectbox.append(pese)
  selectbox.append(delBtn);
    cartBox.appendChild(selectbox)
    
}
function del(item){
    document.getElementById(item).remove();
  }



//   <---------cart number----------------->
