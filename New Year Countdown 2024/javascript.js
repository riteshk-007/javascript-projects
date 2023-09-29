const day = new Date("jan 1, 2024 12:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();

    const diff = day - now;


    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log(days)
    const hours = Math.floor(diff % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    // console.log(hours)
    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    // console.log(minutes)
    const seconds = Math.floor(diff % (1000 * 60) / (1000));
    // console.log(seconds)


    document.getElementById('days').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
}, 1000);
