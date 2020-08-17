let btn = document.getElementById('button');
let list = document.getElementById('pokemon');

btn.addEventListener('click', async event => {
    try {
        const pokemon = await window.fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const pokemonJson = await pokemon.json();
        console.log('POKEMON!!!!!!!', pokemonJson)

        pokemonJson.results.map(pokemon => {
            let listItem = document.createElement("li");
            listItem.innerText = pokemon.name;
            list.appendChild(listItem);
        })
    } catch(err) {
        console.error(err)
    }
})