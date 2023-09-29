// <--------------menu ----------------------->

var togcross = document.getElementById('toggle-cross');
var tog = document.getElementById('toggle');
var all = document.getElementById('all')
var cross = document.getElementById('cross')

all.addEventListener("click", ()=>{ 
    tog.classList.add('active');
    togcross.classList.add('active');
    document.body.classList.add("active");

    function scrollto(){
        window.scrollTo(0,0);
    }
    window.addEventListener("scroll",scrollto);
   
})
cross.addEventListener("click", ()=>{ 
    tog.classList.remove('active');
    togcross.classList.remove('active');
    document.body.classList.remove("active");
})


// <------------------- main slider ------------------------->

let images = [
    {
    image : "/image/slider 1.jpg"
},
{
    image : "/image/slider 2.jpg"
},
{
    image : "/image/slider 3.jpg"
},
{
    image : "/image/slider 4.jpg"
},
{
    image : "/image/slider 5.jpg"
},
{
    image : "/image/slider 6.jpg"
},
{
    image : "/image/slider 7.jpg"
}
]

const carousel = document.querySelector('.carousel');

let slider = []

let slideIndex = 0;

const createSlide = ()=>{
    if(slideIndex >= images.length){
        slideIndex =0;
    }

    // creating DOM element 

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    // attaching all Element 

    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image 

    imgElement.src = images[slideIndex].image;
    slideIndex++;


    // setting Element classname

    slide.className = "slider";


    slider.push(slide);

    // adding slider effect 

    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% -  ${30 * (slider.length - 2)}px)`

    }


}

for(let i = 0; i <1; i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000)


// <----------slide button -----------------> 

// card sliding 

let cardContainer = [...document.querySelectorAll('.card-container')];

let preBtn = [...document.querySelectorAll('.back')];
let nxtBtn = [...document.querySelectorAll('.next')];

cardContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})