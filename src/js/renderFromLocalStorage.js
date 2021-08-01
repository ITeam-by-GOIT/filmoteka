import fetch from './fetchAPI';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import {
  renderTrending,
  renederGalleryMarckUp,
  createGenres,
  createCardYear,
} from './renderGallery';

refs.watchedLibrary.addEventListener('click', () => {
  renderMovieList(localStorageAPI.KEYS.WATCHED);
});
refs.queueLibrary.addEventListener('click', () => {
  renderMovieList(localStorageAPI.KEYS.QUEUE);
});

async function renderMovieList(key) {
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
    console.log(cardsGallery);
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
  } catch (e) {}
}
