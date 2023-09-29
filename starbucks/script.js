function nav(){
    document.querySelectorAll('.li').forEach(function(item){
        item.classList.remove('active');
    })
    event.target.classList.add('active');
}

let wrapper = [...document.querySelectorAll('.wrapper')];

let next = [...document.querySelectorAll('.next')];
let back = [...document.querySelectorAll('.back')];

wrapper.forEach((item, i) =>{
    let wrapperDemensions = item.getBoundingClientRect();
    let wrapperWidth = wrapperDemensions.width;

    next[i].addEventListener('click',()=>{
        item.scrollLeft += wrapperWidth;
    })
    back[i].addEventListener('click',()=>{
        item.scrollLeft -= wrapperWidth;
    })
})