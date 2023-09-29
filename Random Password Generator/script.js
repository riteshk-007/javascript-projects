//ABCDEFGHIJKHLMNOPQRSTUVWxYZ
//abcdefghijklmnopqrstuvwxyz
//1234567890
//~!@#$%^&*()-

const characters = 'ABCDEFGHIJKHLMNOPQRSTUVWxYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()-';

let output = document.getElementById('output');



const randomValue = (value) =>{
    return Math.floor(Math.random() * value)
};

const getPassword = ()=>{
    let range = document.getElementById('range').value;
    document.getElementById('input-value').textContent = range;

    let str = '';
    for(let i = 0; i < range; i++){
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }
    output.value = str;
};

const copy = () =>{
    output.select();
    document.execCommand('copy');
    alert('Password Copied!');
};
getPassword();