let images = [
     {
         img : "image1.jpg"
        },
        {
            img : "image2.jpg"
        },
        {
            img : "image3.jpg"
        },
        {
            img : "image4.jpg"
        },
        
    ]


var container = document.querySelector('.container');
let slider = [];
 let index = 0;

 const createSlider = ()=>{
    if(index >= images.length){
        index = 0;
    }

    // create DOM element0

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');


    // attaching all element 

    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    container.appendChild(slide);

    //setting up image 

    imgElement.src = images[index].img;
    index++;

    //setting element classname

    slide.className = 'element';

    slider.push(slide);

    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% -  ${0 * (slider.length - 2)}px)`
    }
 }

 for(let i = 0; i < 4; i++){
    createSlider();
}
setInterval(()=>{
    createSlider();
}, 2000)
