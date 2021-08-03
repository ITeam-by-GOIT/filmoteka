import { refs } from './refs.js';
import { renderTrending, renderSearchResult, render } from './renderGallery.js';
import Fetch from './fetchAPI.js';
import template from '../templates/option.hbs';

const one = new Fetch();
const divFilter = document.querySelector('.divForFilters');
const select = document.querySelector('.js-select');

async function getGenres() {
  const genres = await one.getGenres();
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
  select.insertAdjacentHTML('beforeend', markup);
}
generateOptions();

async function renderFirstPageOfFilteredMovies(e) {
  if (!e.target.value || e.target.value === 'Choose your genre...') {
    return `qweeeweeqwe`;
  }
  const results = await onFilterChoose(e);

  refs.galleryList.innerHTML = '';
  render(results.results);

  console.log(results);
}

divFilter.addEventListener('change', onFilterChoose);
divFilter.addEventListener('change', renderFirstPageOfFilteredMovies);

async function onFilterChoose(e) {
  const array = await getGenres();
  if (!e.target.value || e.target.value === 'Choose your genre...') {
    return `qweeeweeqwe`;
  }
  const match = array.genres.find(el => el.name === e.target.value).id;

  const results = await one.sortByGenre(match);
  return results;
}

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
