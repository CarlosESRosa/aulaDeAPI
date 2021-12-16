async function fetchAPI(endpoint) {
  const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

async function putOnScreen(pokemonName) {
  const pokemonData = await fetchAPI(pokemonName);

  const nomePokemon = document.querySelector('#nomePokemon');
  const imgPokemon = document.querySelector('#imgPokemon');

  nomePokemon.innerText = pokemonData.name;
  imgPokemon.src = pokemonData.sprites.front_default
}
putOnScreen('vaporeon')
