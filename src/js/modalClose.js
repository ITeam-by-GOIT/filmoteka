import modalAppearanceToggle from './modalAppearanceToggle';
import { refs } from './refs.js';

document.addEventListener('keydown', modalKeypressEsc);
refs.modalBackdrop.addEventListener('click', closeOnClick);

function closeOnClick(e) {
  console.log(e);
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    e.stopPropagation();
    modalAppearanceToggle();
  }
  if (refs.modalBackdrop.classList.contains('is hidden')) {
    refs.modalBackdrop.removeEventListener('click', closeOnClick);
  }
}

function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    modalAppearanceToggle();
  }
  if (refs.modalBackdrop.classList.contains('is hidden')) {
    document.removeEventListener('keydown', modalKeypressEsc);
  }
}
