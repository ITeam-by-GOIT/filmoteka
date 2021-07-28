import modalAppearanceToggle from './modalAppearanceToggle';
import { refs } from './refs.js';

refs.modalCloseBtn.addEventListener('click', modalCloseBtnClick);
document.addEventListener('keypress', modalKeypressEsc);
refs.modalBackdrop.addEventListener('click', modalBackdropClick);

function modalCloseBtnClick(e) {
  modalAppearanceToggle();
  modalCloseBtn.removeEventListener('click');
}

function modalKeypressEsc(e) {
  if (e.key === 27) {
    modalToggle();
    document.removeEventListener('keypress');
  }
}
function modalBackdropClick(e) {
  modalAppearanceToggle();
  backdrop.removeEventListener('click');
}

export { modalCloseBtnClick, modalKeypressEsc, modalBackdropClick };
