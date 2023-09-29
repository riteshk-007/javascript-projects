var logi = document.querySelector(".login");
var log = document.querySelector(".login i");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");


var left = document.getElementById("left");
var right = document.getElementById("right");
var card = document.getElementsByClassName("cards");
var total_card = card.length;



// <----------login------------->

function login() {
    logi.style.display = "flex";
    log.addEventListener('click', () => {
        logi.style.display = "none";
    })
}
setTimeout(login, 100000);


// <------------img Animation------------------>

function change(event) {
    img4.src = event.children[0].src;
}



// <--------------Slider---------------------->
var index = 0;

right.addEventListener('click', () => {
    index += 1;
    slid();
})
left.addEventListener('click', () => {
    index -= 1;
    slid();
})
function slid() {
    if (index > 3) {
        index = 0;
    };
    if (index < 0) {
        index = 3;
    };

    for (i = 0; i < total_card; i++) {
        card[i].classList.remove('active');
    }
    card[index].classList.add('active');
};






// <---------------Add To Cart----------------->
var addItemId = 0;

function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartItem');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick', 'del(' + addItemId + ')');
    var cartItem = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(delBtn);
    cartItem.append(selectedItem);
}
function del(item) {
    document.getElementById(item).remove();
}



// <------------cart display --------------->


var cart = document.getElementById('cart');
function dis() {
    cart.classList.toggle('active');
}

// <------------------main-menu--------------------->

var bars =  document.querySelector('#bars');
var menuUl = document.querySelector('.menu ul');


function mode(){
    var menuUl = document.querySelector('.menu ul');
     menuUl.classList.toggle('phone');
     bars.classList.toggle('active');
  }

