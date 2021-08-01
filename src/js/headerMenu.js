import { refs } from './refs.js';

// /*=== Перемикання сторінок з використанням класів ===*/

const controlPageHome = function () {
  refs.linkMyLibrary.classList.remove('current');
  refs.linkHome.classList.add('current');
  refs.header.classList.remove('header-container_library');
  refs.header.classList.add('header-container_home');
  refs.searchForm.classList.remove('visually-hidden');
  refs.headerButtons.classList.add('visually-hidden');
};
const controlPageLib = function () {
  refs.linkHome.classList.remove('current');
  refs.linkMyLibrary.classList.add('current');
  refs.header.classList.remove('header-container_home');
  refs.header.classList.add('header-container_library');
  refs.headerButtons.classList.remove('visually-hidden');
  refs.searchForm.classList.add('visually-hidden');
};
refs.linkMyLibrary.addEventListener('click', controlPageLib);
refs.linkHome.addEventListener('click', controlPageHome);

refs.headerNavigation.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target === refs.linkMyLibrary) {
    controlPageLib();
    return;
  } else if (evt.target === refs.linkHome) {
    controlPageHome();
    return;
  }
});
refs.logoHome.addEventListener('click', evt => {
  evt.preventDefault();
  controlPageHome();
});

// /* === перемикання кнопок в library ===*/
const buttons = document.querySelectorAll('.button_lib');
for (const button of buttons) {
  button.addEventListener('click', function () {
    buttons.forEach(i => i.classList.remove('active-btn'));
    this.classList.toggle('active-btn');
  });
}
