var next = document.getElementById('next');
var pre = document.getElementById('pre');
var slide = document.getElementsByClassName('slide');
var total_silde = slide.length;

// <--------Slider Start----------------->

var index = 0;
next.addEventListener('click', () => {
    index += 1; //index = index+1
    slider();
});

pre.addEventListener('click', () => {
    index -= 1; //index = index-1
    slider();
});

function slider() {
    if (index > 9) {
        index = 0;
    };
    if (index < 0) {
        index = 9;
    };

    for (i = 0; i < total_silde; i++) {
        slide[i].classList.remove('active');
    }
    slide[index].classList.add('active');
};

// <--------Slider End----------------->

//<--------------Left_box Start---------------->
//<----------left-box||box class Start------------->

var box1 = document.getElementById('ab');
var box2 = document.getElementById('bc');
var box3 = document.getElementById('cd');
var box4 = document.getElementById('de');
var box5 = document.getElementById('ef');
var box6 = document.getElementById('fg');
var box7 = document.getElementById('gh');

//<----------left-box||box class Start------------->
//<----------left-box||box class music Start------------------->

const mp1 = document.getElementById('mp1');
const mp2 = document.getElementById('mp2');
const mp3 = document.getElementById('mp3');
const mp4 = document.getElementById('mp4');
const mp5 = document.getElementById('mp5');
const mp6 = document.getElementById('mp6');
const mp7 = document.getElementById('mp7');
const mp8 = document.getElementById('mp8');
const mp9 = document.getElementById('mp9');
const mp10 = document.getElementById('mp10');



//<----------left-box||box class music End------------------->

// <---------------slider start box start------------------->



var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");
var slide6 = document.getElementById('slide6');
var slide7 = document.getElementById("slide7");
var slide8 = document.getElementById("slide8");
var slide9 = document.getElementById("slide9");
var slide10 = document.getElementById("slide10");



// <---------------slider start box End------------------->

// <---------img_box image Start------------------------->

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');
var img8 = document.getElementById('img8');
var img9 = document.getElementById('img9');
var img10 = document.getElementById('img10');

var size = document.getElementById('size');



// <---------img_box image End------------------------->

//<----------left-box||box class Btn  Start------------------->

const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');

//<----------left-box||box class Btn  End------------------->



// <---------control button Start---------->

var play = document.getElementById('play');
var back = document.getElementById('back');
var nxt = document.getElementById('nxt');

// <---------control button End---------->



//<--------------Left_box Start--------------->

let player1 = 0;
const playMusic1 = () => {
    player1 = 1;
    mp1.play();
    btn1.classList.replace("fa-play", "fa-pause");
    if (img1.style.display = "block") {
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };
    pre.addEventListener('click', () => {
        if (mp1) {
            pauseMusic1();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic1();
        };
    })
    nxt.addEventListener('click',()=>{
        playMusic2();
        pauseMusic1();
        // pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
       
    })
    back.addEventListener('click',()=>{
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        playMusic10();
    })  
};
const pauseMusic1 = () => {
    player1 = 0;
    mp1.pause();
    btn1.classList.replace("fa-pause", "fa-play");
};

box1.addEventListener('click', () => {
    if (player1) {
        pauseMusic1();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic1();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player1){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic1();
            
        }
    })
});



let player2 = 0;

const playMusic2 = () => {
    player2 = 1;
    mp2.play();
    btn2.classList.replace("fa-play", "fa-pause");
    if (img2.style.display = "block") {
        img1.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    }; 
    pre.addEventListener('click', () => {
        if (mp2) {
            pauseMusic2();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic2();
        };
    })
    nxt.addEventListener('click',()=>{
        playMusic3();
        pauseMusic1();
        pauseMusic2();
        // pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
    
};
const pauseMusic2 = () => {
    player2 = 0;
    mp2.pause();
    btn2.classList.replace("fa-pause", "fa-play");
};

box2.addEventListener('click', () => {
    if (player2) {
        pauseMusic2();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic2();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player2){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic2();
            
        }
    })
   
});




let player3 = 0;

const playMusic3 = () => {
    player3 = 1;
    mp3.play();
    btn3.classList.replace("fa-play", "fa-pause");
    if (img3.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };
    nxt.addEventListener('click',()=>{
        playMusic4();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        // pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
   

    play.addEventListener('click',()=>{
        if(player3 = 1||mp3.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic3();
        }
    })
    pre.addEventListener('click', () => {
        if (mp3) {
            pauseMusic3();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic3();
        };
    })

};
const pauseMusic3 = () => {
    player3 = 0;
    mp3.pause();
    btn3.classList.replace("fa-pause", "fa-play");
};

box3.addEventListener('click', () => {
    if (player3) {
        pauseMusic3();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic3();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
});




let player4 = 0;

const playMusic4 = () => {
    player4 = 1;
    mp4.play();
    btn4.classList.replace("fa-play", "fa-pause");
    if (img4.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };

    
    nxt.addEventListener('click',()=>{
        playMusic5();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        // pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
    
    pre.addEventListener('click', () => {
        if (mp4) {
            pauseMusic4();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic4();
        };
    })
};
const pauseMusic4 = () => {
    player4 = 0;
    mp4.pause();
    btn4.classList.replace("fa-pause", "fa-play");

};

box4.addEventListener('click', () => {
    if (player4) {
        pauseMusic4();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic4();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player4 = 1||mp4.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic4();
        }
    })
});





let player5 = 0;

const playMusic5 = () => {
    player5 = 1;
    mp5.play();
    btn5.classList.replace("fa-play", "fa-pause");
    if (img5.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };
   
    pre.addEventListener('click', () => {
        if (mp5) {
            pauseMusic5();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic5();
        };
    })
    nxt.addEventListener('click',()=>{
        playMusic6();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        // pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
   
};
const pauseMusic5 = () => {
    player5 = 0;
    mp5.pause();
    btn5.classList.replace("fa-pause", "fa-play");

};

box5.addEventListener('click', () => {
    if (player5) {
        pauseMusic5();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic5();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player5 = 1||mp5.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic5();
        }
    })
});




let player6 = 0;

const playMusic6 = () => {
    player6 = 1;
    mp6.play();
    btn6.classList.replace("fa-play", "fa-pause");
    if (img6.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };
    
    pre.addEventListener('click', () => {
        if (mp6) {
            pauseMusic6();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic6();
        };
    })
    nxt.addEventListener('click',()=>{
        playMusic7();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        // pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
    
};
const pauseMusic6 = () => {
    player6 = 0;
    mp6.pause();
    btn6.classList.replace("fa-pause", "fa-play");

};

box6.addEventListener('click', () => {
    if (player6) {
        pauseMusic6();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic6();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player6 = 1||mp6.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic6();
        }
    })
});




let player7 = 0;

const playMusic7 = () => {
    player7 = 1;
    mp7.play();
    btn7.classList.replace("fa-play", "fa-pause");
    if (img7.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };
    
    pre.addEventListener('click', () => {
        if (mp7) {
            pauseMusic7();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic7();
        };
    })
    nxt.addEventListener('click',()=>{
        playMusic8();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        // pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
   
};
const pauseMusic7 = () => {
    player7 = 0;
    mp7.pause();
    btn7.classList.replace("fa-pause", "fa-play");

};

box7.addEventListener('click', () => {
    if (player7) {
        pauseMusic7();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic7();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player7 = 1||mp7.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic7();
        }
    })
});


//<--------------Left_box End---------------->



//<-------------------Slider Start----------------------->

slide1.addEventListener('click', () => {

    if (player1) {
        pauseMusic1();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic1();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player1){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic1();
            
        }
    })
})


slide2.addEventListener('click', () => {

    if (player2) {
        pauseMusic2();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic2();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player2){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic2();
            
        }
    })
})


slide3.addEventListener('click', () => {

    if (player3) {
        pauseMusic3();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic3();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player3){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic3();
            
        }
    })
})


slide4.addEventListener('click', () => {

    if (player4) {
        pauseMusic4();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic4();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player4){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic4();
            
        }
    })
})



slide5.addEventListener('click', () => {

    if (player5) {
        pauseMusic5();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic5();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player5){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic5();
            
        }
    })
})


slide6.addEventListener('click', () => {

    if (player6) {
        pauseMusic6();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic6();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player6){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic6();
            
        }
    })
})


slide7.addEventListener('click', () => {

    if (player7) {
        pauseMusic7();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic7();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();

    }
    play.addEventListener('click',()=>{
        if(player7){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic7();
            
        }
    })
})



let player8 = 0;
const playMusic8 = () => {
    player8 = 1;
    mp8.play();
    if (img8.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img9.style.display = "none";
        img10.style.display = "none";
    };
    play.addEventListener('click',()=>{
        if(player8 = 1||mp8.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic8();
        }
    })
    nxt.addEventListener('click',()=>{
        playMusic9();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        // pauseMusic9();
        pauseMusic10();
    })
    
}


const pauseMusic8 = () => {
    player8 = 0;
    mp8.pause();
}

slide8.addEventListener('click', () => {
    pre.addEventListener('click', () => {
        if (mp8) {
            pauseMusic8();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic8();
        };
    })
    if (player8) {
        pauseMusic8();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic8();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic9();
        pauseMusic10();
    }
})


let player9 = 0;
const playMusic9 = () => {
    player9 = 1;
    mp9.play();
    if (img9.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img10.style.display = "none";
    };
    
    nxt.addEventListener('click',()=>{
        playMusic10();
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        // pauseMusic10();
    })
   
}

const pauseMusic9 = () => {
    player9 = 0;
    mp9.pause();
}

slide9.addEventListener('click', () => {
    pre.addEventListener('click', () => {
        if (mp9) {
            pauseMusic9();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic9();
        };
    })
    if (player9) {
        pauseMusic9();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic9();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic10();
    }
    play.addEventListener('click',()=>{
        if(player9 = 1||mp9.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic9();
        }
    })
})



let player10 = 0;

const playMusic10 = () => {
    player10 = 1;
    mp10.play();
    if (img10.style.display = "block") {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "none";
        img8.style.display = "none";
        img9.style.display = "none";
    };
    
    nxt.addEventListener('click',()=>{
        playMusic1();
        // pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
        pauseMusic10();
    })
   
}

const pauseMusic10 = () => {
    player10 = 0;
    mp10.pause();
}

slide10.addEventListener('click', () => {
    pre.addEventListener('click', () => {
        if (mp10) {
            pauseMusic10();
            play.classList.replace("fa-pause", "fa-play");
        } else {
            pauseMusic10();
        };
    })
    if (player10) {
        pauseMusic10();
        play.classList.replace("fa-pause", "fa-play");
    } else {
        playMusic10();
        play.classList.replace("fa-play", "fa-pause");
        pauseMusic1();
        pauseMusic2();
        pauseMusic3();
        pauseMusic4();
        pauseMusic5();
        pauseMusic6();
        pauseMusic7();
        pauseMusic8();
        pauseMusic9();
    }
    play.addEventListener('click',()=>{
        if(player10 = 1||mp10.play()){
            play.classList.replace("fa-pause", "fa-play");
            pauseMusic10();
        }
    })
})
//<-------------------Slider End----------------------->

// <---------Dark Mode Start------------>



function mode() {
    var element = document.body;
    var theme = document.getElementById('theme');

    element.classList.toggle("dark");
    theme.classList.toggle("fa-sun");
}



// <---------Dark Mode End------------>


function menu(){
  var hide =  document.getElementById("boxed");
   hide.classList.toggle('active');
}