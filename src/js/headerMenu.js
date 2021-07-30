import { refs } from './refs.js';

// /*=== Перемикання сторінок з використанням класів ===*/

const header = document.querySelector('.header');
const btn = document.querySelector('.buttons');
const navigation = document.querySelector('.header-nav');
//const search = document.querySelector('.search');

const controlPageHome = function () {
  refs.linkMyLibrary.classList.remove('current');
  refs.linkHome.classList.add('current');
  header.classList.remove('header-container_library');
  header.classList.add('header-container_home');
  refs.searchForm.classList.remove('visually-hidden');
  btn.classList.add('visually-hidden');
};
const controlPageLib = function () {
  refs.linkHome.classList.remove('current');
  refs.linkMyLibrary.classList.add('current');
  header.classList.remove('header-container_home');
  header.classList.add('header-container_library');
  btn.classList.remove('visually-hidden');
  refs.searchForm.classList.add('visually-hidden');
};
refs.linkMyLibrary.addEventListener('click', controlPageLib);
refs.linkHome.addEventListener('click', controlPageHome);

navigation.addEventListener('click', evt => {
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
