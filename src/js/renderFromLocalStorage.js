import { from } from 'form-data';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import { renederGalleryMarckUp } from './renderGallery';

refs.watchedLibrary.addEventListener('click', renderMovieList(localStorageAPI.KEYS.WATCHED));
refs.queueLibrary.addEventListener('click', renderMovieList(localStorageAPI.KEYS.QUEUE));

async function renderMovieList(key) {
  const data = localStorageAPI.getDataPerPage(key);
  if (!data || data.length === 0) {
    //тут будет картинка с котиком
    refs.galleryList.closest.insertAdjacentHTML();
  }
  try {
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(data, genres);
    const cardsGallery = movieCardTemplate(result);
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
  } catch (e) {
    console.log('this is error:', e);
  }
}
