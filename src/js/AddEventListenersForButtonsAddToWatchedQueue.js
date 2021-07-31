import { localStorageAPI } from './localStorageAPI.js';
import { refs } from './refs.js';

export function WatchedLocalStorage(obj) {
  refs.modalBackdrop.addEventListener('click', onWatched);

  function onWatched(event) {
    if (event.target.closest('.js-modal-btn-watched')) {
      event.target.closest('.js-modal-btn-watched').classList.toggle('visually-hidden');
      event.target
        .closest('.js-modal-btn-watched')
        .nextElementSibling.classList.toggle('visually-hidden');

      localStorageAPI.set(localStorageAPI.KEYS.WATCHED, obj);
    }

    if (event.target.closest('.js-modal-btn-remove-watched')) {
      event.target.closest('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
      event.target
        .closest('.js-modal-btn-remove-watched')
        .previousElementSibling.classList.toggle('visually-hidden');

      localStorageAPI.delete(localStorageAPI.KEYS.WATCHED, obj);
    }
  }
}
export function QueueLocalStorage(obj) {
  refs.modalBackdrop.addEventListener('click', onQueue);

  function onQueue(event) {
    if (event.target.closest('.js-modal-btn-queue')) {
      event.target.closest('.js-modal-btn-queue').classList.toggle('visually-hidden');
      event.target
        .closest('.js-modal-btn-queue')
        .nextElementSibling.classList.toggle('visually-hidden');

      localStorageAPI.set(localStorageAPI.KEYS.QUEUE, obj);
    }

    if (event.target.closest('.js-modal-btn-remove-queue')) {
      event.target.closest('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
      event.target
        .closest('.js-modal-btn-remove-queue')
        .previousElementSibling.classList.toggle('visually-hidden');

      localStorageAPI.delete(localStorageAPI.KEYS.QUEUE, obj);
    }
  }
}
