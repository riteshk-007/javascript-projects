var logo = document.querySelector('.logo');
var navbar = document.querySelector('.navbar');
var ul = document.querySelector('ul');
var togg = document.querySelector('.toggle');
var mode = document.querySelector('.toggle input');

logo.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    ul.classList.toggle('active');
    togg.classList.toggle('active');
})
mode.addEventListener('click',()=>{
    mode.classList.toggle('active');
    navbar.classList.toggle('active1');
    logo.classList.toggle('active1');
    togg.classList.toggle('active1');
    ul.classList.toggle('active1');
})