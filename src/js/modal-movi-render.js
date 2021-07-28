import movieDetailsCard from '../templates/aboutMovieTemplates.hbs';
import NewFetchApi from './fetchAPI';

const newFetchApi = new NewFetchApi();
const wrapper = document.querySelector('.modal-wrapper');

async function renderMovieDetails() {
  const response = await newFetchApi.searchByMovieId(76857);
  console.log(response);
  const markup = movieDetailsCard(response);
  console.log(markup);
  wrapper.insertAdjacentHTML('beforeend', markup);
}

renderMovieDetails();
