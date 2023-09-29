let toastbtn = document.getElementById('toastbtn');
let toast = document.querySelector('.toast');

toastbtn.addEventListener('click',()=>{
    toastbtn.innerHTML = ('<i class="fa-solid fa-bookmark"></i> Saved Post')
    toast.style.display = 'flex';
    toast.classList.add('show');
    setTimeout(() => {
        location.reload();
    }, 2000);
})
let reload = document.getElementById('reload');


reload.addEventListener('click',()=>{
    toast.classList.add('hide');
    toastbtn.innerHTML = ('<i class="fa-regular fa-bookmark"></i> Save Post')
})

