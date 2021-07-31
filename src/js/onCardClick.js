import Fetch from './fetchAPI.js';
import { refs } from './refs.js';
import aboutMovieTemplates from '../templates/aboutMovieTemplates.hbs';
import {
  WatchedLocalStorage,
  QueueLocalStorage,
} from './AddEventListenersForButtonsAddToWatchedQueue';
import { localStorageAPI } from './localStorageAPI.js';

const newsPictureApi = new Fetch();

refs.galleryList.addEventListener('click', onCardClick);

function onCardClick(eve) {
  const isCardMovie = eve.target.closest('.gallery-items');
  if (!isCardMovie) {
    return;
  }
  const idMovie = isCardMovie.dataset.index;
  onOpenModal(idMovie);
}

function onOpenModal(id) {
  refs.modalBackdrop.classList.remove('is-hidden');

  newsPictureApi.searchByMovieId(id).then(movie => {
    const w = localStorageAPI.check(localStorageAPI.KEYS.WATCHED, movie);
    const q = localStorageAPI.check(localStorageAPI.KEYS.QUEUE, movie);

    console.log(w);
    refs.cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplates(movie));
    if (!w) {
      document.querySelector('.js-modal-btn-watched').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
    }

    if (!q) {
      document.querySelector('.js-modal-btn-queue').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
    }

    // console.log(movie);
    WatchedLocalStorage(movie);
    QueueLocalStorage(movie);
  });
}
