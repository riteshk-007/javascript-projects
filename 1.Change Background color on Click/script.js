 let colors = ['#FF0000', '#00FFFF', '#00FFFF', '#00008B', '#ADD8E6','#FFA07A','#FA8072','#DFFF00','#DFFF00','#6495ED','#CCCCFF','#FF8C00','#9ACD32','#00FA9A', '#800080', '#FFFF00', '#00FF00', '#FF00FF', '#FFC0CB', '#000000', '#FFA500', '#FFA500', '#800000', '#008000', '#808000', '#7FFD4', '#E5E4E2', '#98AFC7', '#43C6DB'];

let btn =   document.getElementById('btn');

btn.addEventListener('click',()=>{
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    let box = document.getElementById('box');
    box.style.background = randomColor;


    let name = document.getElementById('name');
    name.innerText = randomColor;
    console.log(randomColor)
})