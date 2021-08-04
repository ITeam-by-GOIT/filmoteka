import fetchAPI from './fetchAPI.js';
import renameAll from './renameAll.js';
import { renderTrending } from './renderGallery.js';
import { refs } from './refs.js';

const Languege = {
  en: 'en-US',
  ru: 'ru-RU',
};
const checkboxLanguegeRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

checkboxLanguegeRef.addEventListener('click', chengaLanguege);
(function initLanguege() {
  if (localStorage.getItem('languege') === null) {
    fetchAPI.language = Languege.en;
    fetchAPIconsole.log(fetchAPI.language);
    localStorage.setItem('languege', fetchAPI.language);
  } else {
    fetchAPI.language = localStorage.getItem('languege');
  }
  checkboxLanguegeRef.checked = fetchAPI.language === Languege.en ? false : true;
  bodyRef.classList.add(fetchAPI.language);

  renameAll(fetchAPI.language);
  console.log(fetchAPI.language);
  renderTrending();
  togglePageToHome();
})();

function chengaLanguege() {
  let oldLanguege = localStorage.getItem('languege');

  if (fetchAPI.language === Languege.en) {
    fetchAPI.language = Languege.ru;
    localStorage.setItem('languege', fetchAPI.language);
    bodyRef.classList.replace(oldLanguege, fetchAPI.language);
    checkboxLanguegeRef.checked = true;
  } else {
    fetchAPI.language = Languege.en;
    localStorage.setItem('languege', fetchAPI.language);
    bodyRef.classList.replace(oldLanguege, fetchAPI.language);
    checkboxLanguegeRef.checked = false;
  }
  renameAll(fetchAPI.language);
  console.log(fetchAPI.language);
  renderTrending();
  togglePageToHome();
}

function togglePageToHome() {
  refs.home.classList.add('menu-link--curent');
  refs.linkMyLibrary.classList.remove('menu-link--curent');
  refs.linkHome.classList.add('header-home');
  refs.linkHome.classList.remove('header-lib');
}
