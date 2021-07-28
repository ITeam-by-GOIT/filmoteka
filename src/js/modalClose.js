import modalAppearanceToggle from './modalAppearanceToggle';
import { refs } from './refs.js';

refs.modalCloseBtn.addEventListener('click', modalCloseBtnClick);
document.addEventListener('keydown', modalKeypressEsc);
refs.modalBackdrop.addEventListener('click', modalBackdropClick);

function modalCloseBtnClick(e) {
  modalAppearanceToggle();
  refs.modalCloseBtn.removeEventListener('click', modalCloseBtnClick);
}

function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
  }
}
function modalBackdropClick(e) {
  modalAppearanceToggle();
  refs.modalBackdrop.removeEventListener('click', modalBackdropClick);
}

export { modalCloseBtnClick, modalKeypressEsc, modalBackdropClick };
