document.querySelector('#search-input').addEventListener('input', filterlist);

function filterlist(){
    const serachInput = document.querySelector('#search-input');

    const filter = serachInput.value.toLowerCase();
    const listitem = document.querySelectorAll('.list-item');

    listitem.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }

    });
}
