import { refs } from './js/refs.js';
import './js/headerMenu.js';
import './js/spinner.js';
import './sass/main.scss';
import './js/fetchAPI.js';
import { localStorageAPI } from './js/localStorageAPI.js';
import './js/localStorageAPI.js';
import './js/buttonScrollUp.js';
import aboutMovieTemplates from './templates/aboutMovieTemplates.hbs';
import movieCardTemplate from './templates/movieCardTemplate.hbs';
import onSubmitHandler from './js/eventListenerSearch.js';
import {
  renderTrending,
  renederGalleryMarckUp,
  createGenres,
  createCardYear,
} from './js/renderGallery.js';
import modalAppearanceToggle from './js/modalAppearanceToggle.js';
import './js/modalClose.js';
import getDataFromLocalStorage from './js/eventListenerGetDataFromLocalStorage.js';
import renderGallery from './js/renderGallery.js';
import './js/onCardClick.js';
import './js/AddEventListenersForButtonsAddToWatchedQueue.js';

// localStorageAPI.set(localStorageAPI.KEYS.WATCHED, { a: 50 });
// localStorageAPI.set(localStorageAPI.KEYS.WATCHED, { b: 70 });

// localStorageAPI.delete(localStorageAPI.KEYS.WATCHED, { b: 70 });
