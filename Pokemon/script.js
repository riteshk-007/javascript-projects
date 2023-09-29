const pokeImg = document.querySelector('.wrapper img');
const pokeName = document.querySelector('.wrapper h3');
const pokeId = document.querySelector('.wrapper h5');
const input = document.getElementById('search');
const move1 = document.querySelector('.move1');
const move2 = document.querySelector('.move2');
const move3 = document.querySelector('.move3');
const move4 = document.querySelector('.move4');
const move5 = document.querySelector('.move5');
const type = document.querySelector('.type');
const getPokeInfo = async () => {
    let data = `https://pokeapi.co/api/v2/pokemon/`
    let res = await fetch(data);
    let pokemon = await res.json();
    console.log(pokemon)
    pokeName.innerHTML = pokemon.name;
    pokeImg.src = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokeId.innerHTML = pokemon.id;
    move1.innerHTML = pokemon.moves[0].move.name;
    move2.innerHTML = pokemon.moves[1].move.name;
    move3.innerHTML = pokemon.moves[2].move.name;
    move4.innerHTML = pokemon.moves[3].move.name;
    move5.innerHTML = pokemon.moves[4].move.name;
    type.innerHTML = pokemon.types[0].type.name
}

input.addEventListener('input', (e)=>{
    e.preventDefault();

    if(input.value == ''){
        getPokeInfo(1)
    }else{

        getPokeInfo(input.value.toLowerCase())
    }
})
const start = document.getElementById('start');
start.addEventListener('click', ()=>{
    getPokeInfo(1)
    const container = document.querySelector('.container');
    container.classList.add('active')
})