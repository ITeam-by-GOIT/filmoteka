import { from } from 'form-data';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import { renederGalleryMarckUp } from './renderGallery';

refs.watchedLibrary.addEventListener('click', renderMovieList(localStorageAPI.KEYS.WATCHED));
refs.queueLibrary.addEventListener('click', renderMovieList(localStorageAPI.KEYS.QUEUE));

function renderMovieList(key) {
  const data = localStorageAPI.getDataPerPage(key);
  if (!data || data.length === 0) {
    //тут будет картинка с котиком
    //refs.galleryList.closest.insertAdjacentHTML();
  }
  let genres = data.map(item => {
    return item.genres;
  });
  const result = renederGalleryMarckUp(data, genres);
  const cardsGallery = movieCardTemplate(result);
  refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
}
