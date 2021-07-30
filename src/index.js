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
refs.searchForm.addEventListener('submit', onSubmitHandler);

// ------------ for test notification (for example, with an invalid key)
import FetchAPI from './js/fetchAPI.js';
const fetchAPI = new FetchAPI();
const promise = fetchAPI.searchByTrending('day', 67);
promise.then(data => console.log(data.results[0].release_date.slice(0, 4)));
import getDataFromLocalStorage from './js/eventListenerGetDataFromLocalStorage.js'
import renderGallery from './js/renderGallery.js';
import './js/onCardClick.js';

refs.searchForm.addEventListener('submit', onSubmitHandler);


// localStorageAPI.set([1, 2], localStorageAPI.KEYS.QUEUE)

// console.log(getDataFromLocalStorage(localStorageAPI.KEYS.QUEUE))
