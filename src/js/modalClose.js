import modalAppearanceToggle from './modalAppearanceToggle';
import { refs } from './refs.js';
import { renderMovieList } from './renderFromLocalStorage';

export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    refs.cardContainer.innerHTML = '';
    e.stopPropagation();
    modalAppearanceToggle();
    refs.modalBackdrop.removeEventListener('click', closeOnClick);
    if (refs.movieGallerySection.dataset.page === 'trending' || refs.movieGallerySection.dataset.page === 'watched') {
      renderMovieList(refs.movieGallerySection.dataset.page, 1);
    }
  }
}

export function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    refs.cardContainer.innerHTML = '';
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
  }
}
