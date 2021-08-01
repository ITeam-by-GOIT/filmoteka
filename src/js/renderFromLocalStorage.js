import FetchAPI from './fetchAPI';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import {
  renderTrending,
  renederGalleryMarckUp,
  createGenres,
  createCardYear,
} from './renderGallery';

const fetch = new FetchAPI();

refs.watchedLibrary.addEventListener('click', () => {
  renderMovieList(localStorageAPI.KEYS.WATCHED, 1);
});
refs.queueLibrary.addEventListener('click', () => {
  renderMovieList(localStorageAPI.KEYS.QUEUE, 1);
});
refs.linkMyLibrary.addEventListener('click', () => {
  refs.galleryList.innerHTML = '';
});
async function renderMovieList(key, page) {
  if (page === 1) {
    refs.galleryList.innerHTML = ''
      ;
  }
  const data = localStorageAPI.getDataPerPage(key);
  if (!data || data.length === 0) {
    return;
    //тут будет картинка с котиком
  }
  try {
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = renederGalleryMarckUp(data, genres);
    const cardsGallery = movieCardTemplate(result);
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
  } catch (e) { }
}
