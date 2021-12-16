const root = document.querySelector('#root');

async function fetchAPICompleta() {
  const url = `https://ghibliapi.herokuapp.com/films/`
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

function createMovie(filme) {
  const filmDiv = document.createElement('div');
  filmDiv.className = 'filmCard'
  const filmH1 = document.createElement('h1');
  const filmImg = document.createElement('img');

  filmH1.innerText = filme.title;
  filmImg.src = filme.image;

  filmDiv.appendChild(filmH1);
  filmDiv.appendChild(filmImg);

  return filmDiv;
}

function loadOnScreen(filmes) {
  filmes.forEach((filme) => {
    root.appendChild(createMovie(filme));
  })
}

window.onload = async () => {
  const filmes = await fetchAPICompleta();
  loadOnScreen(filmes);
}