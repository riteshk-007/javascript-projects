let carousel = [...document.querySelectorAll('.container')];

let nxtBtn = [...document.querySelectorAll('#nxt-btn')]
let preBtn = [...document.querySelectorAll('#pre-btn')]

carousel.forEach((item, i)=>{
    let carouselDimensions = item.getBoundingClientRect();
    let carouselWidth = carouselDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += carouselWidth - 150;
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= carouselWidth + 150;
    })
})