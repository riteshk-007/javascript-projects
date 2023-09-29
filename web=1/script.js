// mobile menu 

const menu = document.querySelector('.logo span i');
const ul = document.querySelector('.navbar ul');

menu.addEventListener('click', ()=>{
    if(ul.classList.toggle('active')){
        
        menu.classList.replace('fa-bars', 'fa-xmark');
    }
    else{
        
        menu.classList.replace('fa-xmark', 'fa-bars');
    }
    
 })



 // cart click function
  
 let id = 0;

 const cart = Array.from( document.querySelectorAll('label'));
    
    cart.forEach(element  =>{
        element.addEventListener('click', ()=>{
            //get img 
             let store =    element.parentElement.parentElement;
             let imgView = store.querySelector('img');

             // create element
             let product = document.createElement('div');
             let productImg = document.createElement('img');
             let name = document.createElement('span');
             let number = document.createElement('input');
             let money = document.createElement('span');

             // give name element
                product.className = 'product';
                name.className = 'name';
                number.className = 'number';
                money.className = 'money';

                //set function
                    productImg.src = imgView.src;
                    name.innerText =  element.parentElement.children[0].innerText;
                    money.innerText =  element.parentElement.children[2].innerText;

                //joint all element
                product.appendChild(productImg);
                product.appendChild(name);
                product.appendChild(number);
                product.appendChild(money);

                let stock = document.querySelector('.cart');
                stock.appendChild(product);


            
        })
    })



 //cart visibility
const cartBox = document.querySelector('.fa-cart-shopping');

cartBox.addEventListener('click', ()=>{
    let stock = document.querySelector('.cart');
    stock.classList.add('active');

    let wrong = document.querySelector('label');
    wrong.addEventListener('click', ()=>{
        stock.classList.remove('active')
    })
})

