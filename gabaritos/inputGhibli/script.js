const myButton = document.querySelector('#myButton');
const myInput = document.querySelector('#myInput');
const imgBox = document.querySelector('#imgBox');

async function fetchAPICompleta() {
  const url = `https://ghibliapi.herokuapp.com/films/`
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

async function fetchAPI(endpoint) {
  const url = `https://ghibliapi.herokuapp.com/films/${endpoint}`
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

myButton.addEventListener('click', async () => {
  const valorInput = myInput.value;
  const arrayOfFilms = await fetchAPICompleta();
  const corectFilm = arrayOfFilms.reduce((acc, film) => {
    if (film.title === valorInput) {
      acc = film.id;
    }
    return acc;
  }, 0);

  const filmData = await fetchAPI(corectFilm);
  imgBox.src = filmData.image

})
