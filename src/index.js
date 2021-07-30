import { refs } from './js/refs.js';
import './js/spinner.js';
import './sass/main.scss';
import './js/fetchAPI.js';
import { watchedMoviesList, queueMoviesList, localStorageAPI } from './js/localStorageAPI.js';
import Fetch from './js/fetchAPI.js';
import './js/localStorageAPI.js';
import './js/buttonScrollUp.js';
import aboutMovieTemplates from './templates/aboutMovieTemplates.hbs';
import movieCardTemplate from './templates/movieCardTemplate.hbs';
import onSubmitHandler from './js/eventListenerSearch.js';
import getDataFromLocalStorage from './js/eventListenerGetDataFromLocalStorage.js'
import { renderTrending, renederGalleryMarckUp, createGenres, createCardYear } from './js/renderGallery.js';
import './js/onCardClick.js';
import renderByInput from './js/renderByInput.js';

renderByInput()


// localStorageAPI.set([1, 2], localStorageAPI.KEYS.QUEUE)

// console.log(getDataFromLocalStorage(localStorageAPI.KEYS.QUEUE))

