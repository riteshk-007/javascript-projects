function create(){
    var note = document.querySelector('#note');
    let content = document.querySelector('.content');

    //  create elements

    let box = document.createElement('div');
    let text = document.createElement('div');
    let menu = document.createElement('div');
    let tog = document.createElement('i');
    let toggleMenu = document.createElement('ul');
    let option1 = document.createElement('li');
    let option2 = document.createElement('li');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let li1 = document.createElement('i');
    let li2 = document.createElement('i');

    // append elements


    content.appendChild(box);
    box.appendChild(text);
    box.appendChild(menu);
    menu.appendChild(tog);
    menu.appendChild(toggleMenu);
    toggleMenu.appendChild(option1);
    toggleMenu.appendChild(option2);
    option1.appendChild(li1);
    option2.appendChild(li2);
    option1.appendChild(a1);
    option2.appendChild(a2);
    
    // add classname

    box.className = "box";
    text.className = "text";
    menu.className = "menu";
    toggleMenu.className = "toggle-menu";
    option1.className = "edit";
    option2.className = "delete";
    tog.className = 'fa-solid fa-ellipsis toggle';
    a1.innerHTML = "Edit";
    a2.innerHTML = "Delete";
    li1.className = 'fa-regular fa-pen-to-square';
    li2.className = 'fa-solid fa-trash';

    text.innerHTML = note.value;
  

    note.value = "";

    tog.addEventListener('click',()=>{
        toggleMenu.classList.toggle('active');
    })
    option1.addEventListener('click',()=>{
        note.value =  text.innerHTML;
        content.removeChild(box);

    })

    option2.addEventListener('click',()=>{
        content.removeChild(box);
    })

}
