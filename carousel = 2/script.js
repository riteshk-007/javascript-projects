let container = [...document.querySelectorAll('.container')];

let nxt = [...document.querySelectorAll('#nxt')];
let pre = [...document.querySelectorAll('#back')];

container.forEach((item, i) =>{
    let containerDemensions = item.getBoundingClientRect();
    let containerWidth = containerDemensions.width;

    nxt[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 15;
    })
    pre[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 15;
    })
})