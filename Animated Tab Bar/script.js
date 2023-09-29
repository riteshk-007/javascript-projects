let menu = document.querySelectorAll('.menu .item .list');
let indicator = document.querySelector('.indicator');

for(let i = 0; i<menu.length; i++){
    menu[i].addEventListener('click', function(){
        document.querySelector('.menu .item .active').classList.remove('active');
        menu[i].classList.add('active');
        document.body.style.background = menu[i].getAttribute('color');
        indicator.style.background = menu[i].getAttribute('color');
        indicator.style.left = `calc(${(i*20)+20}px + ${i*57}px)`;
    })
}