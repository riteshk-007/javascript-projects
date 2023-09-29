// they return random value in 1 to 10;

let randomone =  parseInt(Math.floor(Math.random() * 10));
let randomtwo =  parseInt(Math.floor(Math.random() * 10));

let boxone = document.getElementById('boxOne');
boxone.innerHTML = `${randomone}`;


let boxtwo = document.getElementById('boxTwo');
boxtwo.innerHTML = `${randomtwo}`;



let total = randomone + randomtwo;

function check(){
    let number = document.getElementById('number').value;
        number = Number(number);


    //check answer

    if(number === total){
        alert('Correct');
        window.location.reload();
    }else{
        alert('Sorry. Incorrect. The correct answer was ' + total + '.')
        window.location.reload()
    }
}