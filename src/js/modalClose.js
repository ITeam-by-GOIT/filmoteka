import modalAppearanceToggle from './modalAppearanceToggle';
import { refs } from './refs.js';

refs.modal.addEventListener('click', modalCloseBtnClick);
document.addEventListener('keydown', modalKeypressEsc);
refs.modalBackdrop.addEventListener('click', modalBackdropClick);

function modalCloseBtnClick(e) {
  if (e.target === refs.modalCloseBtn) {
    modalAppearanceToggle();
    refs.modal.removeEventListener('click', modalCloseBtnClick);
  }
}

function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
  }
}
function modalBackdropClick(e) {
  if (e.target !== refs.modal) {
    modalAppearanceToggle();
    refs.modalBackdrop.removeEventListener('click', modalBackdropClick);
  }
}

export { modalCloseBtnClick, modalKeypressEsc, modalBackdropClick };
