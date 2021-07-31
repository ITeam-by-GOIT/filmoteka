import { localStorageAPI } from './localStorageAPI.js';
import { refs } from './refs.js';

// refs.modalBackdrop.addEventListener('click', onWatched);
// refs.modalBackdrop.addEventListener('click', onQueue);

export function onWatched(event) {
  if (event.target.closest('.js-modal-btn-watched')) {
    event.target.closest('.js-modal-btn-watched').classList.toggle('visually-hidden');
    event.target
      .closest('.js-modal-btn-watched')
      .nextElementSibling.classList.toggle('visually-hidden');
  }

  if (event.target.closest('.js-modal-btn-remove-watched')) {
    event.target.closest('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
    event.target
      .closest('.js-modal-btn-remove-watched')
      .previousElementSibling.classList.toggle('visually-hidden');
  }
}

export function onQueue(event) {
  if (event.target.closest('.js-modal-btn-queue')) {
    event.target.closest('.js-modal-btn-queue').classList.toggle('visually-hidden');
    event.target
      .closest('.js-modal-btn-queue')
      .nextElementSibling.classList.toggle('visually-hidden');
  }

  if (event.target.closest('.js-modal-btn-remove-queue')) {
    event.target.closest('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
    event.target
      .closest('.js-modal-btn-remove-queue')
      .previousElementSibling.classList.toggle('visually-hidden');
  }
}

export function addToLocalStorage(id) {}
export function removeToLocalStorage(id) {}
