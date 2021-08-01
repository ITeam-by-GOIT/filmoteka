import modalAppearanceToggle from './modalAppearanceToggle';
import { refs } from './refs.js';

export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    refs.cardContainer.innerHTML = '';
    e.stopPropagation();
    modalAppearanceToggle();
    refs.modalBackdrop.removeEventListener('click', closeOnClick);
  }
}

export function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    refs.cardContainer.innerHTML = '';
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
  }
}
