function changecolor(color){
    document.body.style.background = color;

    document.querySelectorAll('.color').forEach(function(item){
        item.classList.remove('active');
    })
    event.target.classList.add('active');
}