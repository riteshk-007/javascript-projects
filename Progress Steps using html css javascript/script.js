            // <--button------>

let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let btn4 = document.querySelector('.btn-4');
let btn5 = document.querySelector('.btn-5');
let btn6 = document.querySelector('.btn-6');
let btn7 = document.querySelector('.btn-7');


            // <---pages----->

let page1 = document.querySelector('.page-1');
let page2 = document.querySelector('.page-2');
let page3 = document.querySelector('.page-3');
let page4 = document.querySelector('.page-4');


        // <----progress bar ---------->

        let pro1 = document.querySelector('.pro-1');
        let pro2 = document.querySelector('.pro-2');
        let pro3 = document.querySelector('.pro-3');
        let pro4 = document.querySelector('.pro-4');

    // <-------button function -------->

btn1.addEventListener('click',()=>{
    page1.style.marginLeft = "-300px";
    pro1.style.background = '#07c907';
    pro1.innerHTML = "✓"
});
btn2.addEventListener('click',()=>{
    page1.style.marginLeft = "25px";
    pro1.style.background = '';
    pro1.innerHTML = "1";
});
btn3.addEventListener('click',()=>{
    page2.style.marginLeft = "-300px";
    pro2.style.background = '#07c907';
    pro2.innerHTML = "✓";
});
btn4.addEventListener('click',()=>{
    page2.style.marginLeft = "25px";
    pro2.style.background = '';
    pro2.innerHTML = "2";
});
btn5.addEventListener('click',()=>{
    page3.style.marginLeft = "-300px";
    pro3.style.background = '#07c907';
    pro3.innerHTML = "✓"

});
btn6.addEventListener('click',()=>{
    page3.style.marginLeft = "25px";
    pro3.style.background = '';
    pro3.innerHTML = "3";
});

let container = document.querySelector('.container');
let animeBox = document.querySelector('.anime-box');
let done = document.querySelector('.done');
btn7.addEventListener('click',()=>{
    pro4.style.background = '#07c907';
    pro4.innerHTML = "✓";
    container.classList.add('active');
    animeBox.classList.add('active');
});


done.addEventListener('click',()=>{
    animeBox.classList.remove('active');
    setTimeout(function(){
        window.location.reload();
    } , 2500);
})
