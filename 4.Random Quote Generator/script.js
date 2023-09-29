let btn = document.getElementById('btn');
let screen = document.getElementById('screen');

let quates = [
' "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. " - Winston Churchill',
' " Dont Let Yesterday Take Up Too Much of Today . " - Will Rogers ',
' " You Learn More From Failure Than From Success. Dont Let It Stop You . Failure Builds Character . " - Unknown',
' " Its Not Whether You Get Knocked Down , Its Whether You Get Up . " - Inspirational Quote By Vince Lombardi',
' " If You Are Working on Something That You Really Care About , You Dont Have To Be Pushed . The Vision Pulls You . " - Steve Jobs',
' " People Who Are Crazy Enough To Think They Can Change The World , Are The Ones Who Do. " - Rob Siltanen',
' " Failure will Never Overtake Me If My Determination To Succeed Is Strong Enough . " - Og Mandino',
' " Entrepreneurs Are Great At Dealing with Uncertainty And Also Very Good At Minimizing Risk . Thats The Classic Entrepreneur . " - Mohnish Pabrai',
' " We May Encounter Many Defeats But We Must Not Be Defeated . " - Maya Angelou',
' " Knowing Is Not Enough ; We Must Apply . Wishing Is Not Enough ; We Must Do. " Johann Wolfgang von Goethe',
]

btn.addEventListener('click',()=>{
    var randomQuote = quates[Math.floor(Math.random() * quates.length)];
    screen.innerHTML =  randomQuote;
})