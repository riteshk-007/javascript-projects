var cart =  document.querySelector('.cart span');
var itemBox =  document.querySelector('.item-box');

cart.addEventListener('click',()=>{
    itemBox.classList.toggle('active');
})
addItemId =0;
function add(item){
    addItemId +=1;
    // create DOM Element 
    
    let  card = document.createElement('div');
    card.setAttribute('id',addItemId);
    let  name = document.createElement('div');
    name.innerText = item.children[1].innerText;
    let image = document.createElement('img');
    image.setAttribute('src',item.children[0].currentSrc);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');
    
    
    // attaching all Element

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(delBtn);
    itemBox.appendChild(card);


        // setting elements classname

        card.className = "card";
        name.className = "name";

}
function del(item){
    document.getElementById(item).remove();
  }