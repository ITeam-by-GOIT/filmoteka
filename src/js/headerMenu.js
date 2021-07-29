const { get } = require('lodash');

/*=== Перемикання сторінок з використанням класів ===*/
const refs = {
  header: document.querySelector('.header'),
  navigation: document.querySelector('.header-nav'),
  logo: document.querySelector('.logo'),
  home: document.querySelector('.js-home_page'),
  library: document.querySelector('.js-lib_page'),
  search: document.querySelector('.search'),
  btn: document.querySelector('.buttons'),
};

// const Page = {
//   HOME: 'header-container_home',
//   LIBRARY: 'header-container_library',
// };
// refs.library.addEventListener('click', switchPage);
// function switchPage(event) {
//   event.preventDefault();
//   if (refs.header.checked) {
//     refs.header.classList.remove(Page.HOME);
//     refs.header.classList.add(Page.LIBRARY);
//     refs.home.classList.remove('current');
//     refs.library.classList.add('current');
//     refs.btn.classList.remove('visually-hidden');
//     refs.search.classList.add('visually-hidden');
//     localStorage.setItem('page', Page.LIBRARY);
//   } else {
//     refs.body.classList.replase(Page.LIBRARY, Page.HOME);
//     localStorage.setItem('page', Page.HOME);
//   }
// }
// const keepOfPage = () => {
//   const savedPage = localStorage.getItem('page');
//   if (savedPage) {
//     refs.header.classList.add(savedPage);
//   }
//     if (savedPage === Page.LIBRARY) {
//       refs.header.checked = true;
//     }
// };
// keepOfPage();

/*==== 2 version ====*/

const controlPageHome = function () {
  refs.library.classList.remove('current');
  refs.home.classList.add('current');
  refs.header.classList.remove('header-container_library');
  refs.header.classList.add('header-container_home');
  refs.search.classList.remove('visually-hidden');
  refs.btn.classList.add('visually-hidden');
};
const controlPageLib = function () {
  refs.home.classList.remove('current');
  refs.library.classList.add('current');
  refs.header.classList.remove('header-container_home');
  refs.header.classList.add('header-container_library');
  refs.btn.classList.remove('visually-hidden');
  refs.search.classList.add('visually-hidden');
};
refs.library.addEventListener('click', controlPageLib);
refs.home.addEventListener('click', controlPageHome);

refs.navigation.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target === refs.library) {
    controlPageLib();
    return;
  } else if (evt.target === refs.home) {
    controlPageHome();
    return;
  }
});
refs.logo.addEventListener('click', evt => {
  evt.preventDefault();
  controlPageHome();
});
/* === перемикання кнопок в library ===*/
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function () {
    buttons.forEach(i => i.classList.remove('active-btn'));
    this.classList.toggle('active-btn');
  });
}
