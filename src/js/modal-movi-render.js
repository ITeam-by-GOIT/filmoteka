import movieDetailsCard from '../templates/aboutMovieTemplates.hbs';
import NewFetchApi from './fetchAPI';

const newFetchApi = new NewFetchApi();
const wrapper = document.querySelector('.modal');

async function renderMovieDetails() {
  const response = await newFetchApi.searchByMovieId(76857);
  console.log(response);
  const markup = movieDetailsCard(response);
  console.log(markup);
  wrapper.insertAdjacentHTML('beforeend', markup);
}

renderMovieDetails();

const div = document.querySelector('.overlay');
const image = document.createElement('img');
image.setAttribute('src', '../images/play.png');
image.setAttribute('alt', 'play');
div.innerHTML = image;
//  class="modal-img-play" src = "../images/play.png" alt = "icon play" >
