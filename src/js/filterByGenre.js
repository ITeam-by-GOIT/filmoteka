import { refs } from './refs.js';
import {
  renderTrending,
  renderSearchResult,
  render,
  renderByGenreFilter,
} from './renderGallery.js';
import fetchAPI from './fetchAPI.js';
import template from '../templates/option.hbs';

// const fetchAPI = new Fetch();

async function getGenres() {
  const genres = await fetchAPI.getGenres();
  return genres;
}

async function generateOptions() {
  const emptyObj = {
    name: 'Choose your genre...',
    id: undefined,
  };
  const dataForGenerationOfOptions = await getGenres();
  const array = dataForGenerationOfOptions.genres.map(el => el);
  array.unshift(emptyObj);
  const markup = array.map(el => template({ el }));
  refs.select.insertAdjacentHTML('beforeend', markup);
}
generateOptions();

refs.divFilter.addEventListener('change', onFilterChooseAndRenderPages);

async function onFilterChooseAndRenderPages(e) {

  if (e.target.value === 'Choose your genre...') {
    return;
  }
  refs.movieGallerySection.dataset.page = 'filtering';
  renderByGenreFilter(e.target.value, 1);
}

// for to filter disappear while in library
let status = 'home';
const filtersSection = document.querySelector('.js-filters');
refs.linkHome.addEventListener('click', onHomeClickHandler);
refs.linkMyLibrary.addEventListener('click', onMyLibraryClickHandler);
refs.logoHome.addEventListener('click', onHomeClickHandler);

function onHomeClickHandler() {
  filtersSection.classList.remove('visually-hidden');
  status = 'home';
}

function onMyLibraryClickHandler() {
  status = 'library';
  filtersSection.classList.add('visually-hidden');
}

export { getGenres };