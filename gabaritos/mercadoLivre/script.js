async function fetchAPI() {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
  const promise = await fetch(url);
  const data = await promise.json();
  return data
}

async function putOnScreen() {
  const { results: arrayOfComputadores } = await fetchAPI();

  const nomeComputador = document.querySelector('#nomeComputador');
  const imgComputador = document.querySelector('#imgComputador');
  const precoComputador = document.querySelector('#precoComputador');

  const [firstComputer] = arrayOfComputadores;

  nomeComputador.innerText = firstComputer.title
  precoComputador.innerText = firstComputer.price
  imgComputador.src = firstComputer.thumbnail
}
putOnScreen()
