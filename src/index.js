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

document.querySelector('.js-search-form').addEventListener('submit', onSubmitHandler);
