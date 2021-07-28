import modalToggle from './modalToggle';

modalCloseBtn.addEventListener('click', e => {
  modalToggle();
  modalCloseBtn.removeEventListener('click');
});

document.addEventListener('keypress', e => {
  if (e.key === 27) {
    modalToggle();
    document.removeEventListener('keypress');
  }
});

backdrop.addEventListener('click', e => {
  modalToggle();
  backdrop.removeEventListener('click');
});
