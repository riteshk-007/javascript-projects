let movies = [
    {
        name: 'prey',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloremque excepturi. Mollitia non magnam dolor voluptatum atque laboriosam, nobis quidem repudiandae rem. Facilis, delectus ab.',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloremque excepturi. Mollitia non magnam dolor voluptatum atque laboriosam, nobis quidem repudiandae rem. Facilis, delectus ab.',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloremque excepturi. Mollitia non magnam dolor voluptatum atque laboriosam, nobis quidem repudiandae rem. Facilis, delectus ab.',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloremque excepturi. Mollitia non magnam dolor voluptatum atque laboriosam, nobis quidem repudiandae rem. Facilis, delectus ab.',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloremque excepturi. Mollitia non magnam dolor voluptatum atque laboriosam, nobis quidem repudiandae rem. Facilis, delectus ab.',
        image: 'images/slider 5.PNG'
    }
]


const carousel = document.querySelector('.carousel');
let slider = []

let slideIndex = 0;


const createSlide = ()=>{
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }
    // creating DOM element 

     let slide = document.createElement('div');
     let imgElement = document.createElement('img');
     let content = document.createElement('div');
     let h1 = document.createElement('h1');
     let p  = document.createElement('p');


    //  attaching all elements 

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image 

    imgElement.src = movies[slideIndex].image;
    slideIndex++;


    // setting elements classname

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    slider.push(slide);


    // adding sliding effect 

    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% -  ${30 * (slider.length - 2)}px)`
    }
}

for(let i = 0; i < 4; i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
}, 4000)



// videos cards 

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    })
})


// card sliding 

let cardContainer = [...document.querySelectorAll('.card-container')];

let preBtn = [...document.querySelectorAll('.pre-btn')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];

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