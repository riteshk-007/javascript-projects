let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = (weight / (height * height) * 10000);
    document.getElementById('output').value = bmi + " bmi";
})