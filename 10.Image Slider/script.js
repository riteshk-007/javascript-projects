let next = document.getElementById('next');
let back = document.getElementById('back');

var arr = ["img1.jpeg", "img2.jpg", "img3.jpg", "img4.jpg", "img6.jpg"];

var i = 0;

next.addEventListener('click', ()=>{
    i++;

    if(i > arr.length -1){
        i = 0;
    }
    document.getElementById('image').src = arr[i];
})

back.addEventListener('click',()=>{
    i--;
    if(i < 0){
        i = arr.length -1;
    }
    document.getElementById('image').src = arr[i];
})