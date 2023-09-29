var btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    var inpVal = document.getElementById('inpVal');
    var result = document.querySelector('.result');
    let countryName = inpVal.value;
    let store = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(store)
    .then((response) => response.json())
    .then((data) => {
        result.innerHTML = `
        <img src = "${data[0].flags.svg}" class="flag">
        <h2>${data[0].name.common}</h2>
        <div class= "box">
        <h4>Capital: </h4>
        <span>${data[0].capital[0]}</span>
        </div> 
        <div class= "box">
        <h4>Continent: </h4>
        <span>${data[0].continents[0]}</span>
        </div> 
        <div class= "box">
        <h4>Population: </h4>
        <span>${data[0].population}</span>
        </div> 
        <div class= "box">
        <h4>Currency: </h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
        -  ${Object.keys(data[0].currencies)[0]}</span>
        </div> 
        <div class= "box">
        <h4>Common Languages: </h4>
        <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(",")}</span>
        </div> 
        
        `
    })

})