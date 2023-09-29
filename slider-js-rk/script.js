var next = document.getElementById('next');
var pre = document.getElementById('pre');
var slid = document.getElementsByClassName('slid');
var total_slid = slid.length;



//normal Start---->

        var index = 0;

        next.addEventListener('click', ()=>{
        index += 1; //index = index+1;
        slider();
        })

        pre.addEventListener('click',()=>{
        index -= 1;  //index = index-1;
        slider();
        })
        function slider(){

        if (index > 9) {
        index = 0;
        };

        if(index < 0){
        index = 9;
        };

        for (i = 0; i < total_slid; i++) {
        slid[i].classList.remove('active');
        }
        slid[index].classList.add('active');
        }
//normal End---->




// var i, index = 0;

//         // <------------next button Start------------->

// next.addEventListener('click', () => {
//     index += 1; //index =index+1;
//     goslide();
// })
// function goslide() {
//     if (index > 9) {
//         index = 0;
//     };
//     for (i = 0; i < total_slid; i++) {
//         slid[i].classList.remove('active');
//     }
//     slid[index].classList.add('active');
// }
//         // <------------next button End------------->

//         // <------------pre button Start------------->


// pre.addEventListener('click', () => {
//     index -= 1;  //index = index-1;
//     goslide();
// })
// function goslide() {
//     if (index > 9) {
//         index = 0;
//     };
//     if(index<0){
//         index=9;
//     }
//     for (i = 0; i < total_slid; i++) {
//         slid[i].classList.remove('active');
//     }
//     slid[index].classList.add('active');
// }

         // <------------pre button End------------->





         