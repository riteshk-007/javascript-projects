const container = document.querySelector('.container');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const leftArrow = document.querySelector('.left a');
const rightArrow = document.querySelector('.right a');


right.addEventListener('mouseenter',()=>{
    right.classList.add('hoverleft');
})
right.addEventListener('mouseleave',()=>{
    right.classList.remove('hoverleft')
})
left.addEventListener('mouseenter',()=>{
    left.classList.add('hoverleft')
})
left.addEventListener('mouseleave',()=>{
    left.classList.remove('hoverleft')
})
leftArrow.addEventListener('click',()=>{
    right.classList.toggle('active')
    leftArrow.classList.toggle('active')
})
rightArrow.addEventListener('click',()=>{
    left.classList.toggle('active')
    rightArrow.classList.toggle('active')
})