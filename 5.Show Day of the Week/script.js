let week = document.getElementById('week');
let date = document.getElementById('date');




setInterval(() => {
    
let day = new Date();
let days = day.getDay();
let ndate = day.toLocaleString();

switch (days) {
    case 0:
        days = "Sunday";
        break;
    case 1:
        days = "Monday";
        break;
    case 2:
        days = "Tuesday";
        break;
    case 3:
        days = "Wednesday";
        break;
    case 4:
        days = "Thursday";
        break;
    case 5:
        days = "Friday";
        break;
    case 6:
        days = "Saturday";
}


week.innerHTML = days;
date.innerHTML = ndate;

}, 1000);

// console.log(day + "<br>" + days + "<br>"+ ndate)



