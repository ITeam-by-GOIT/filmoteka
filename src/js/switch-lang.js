import fetchAPI from './fetchAPI.js';
import renameAll from './renameAll.js';
import { renderTrending } from './renderGallery.js';
import { refs } from './refs.js';
import { controlPageHome } from './headerMenu.js';

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
  renderTrending();
  controlPageHome();
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
  renderTrending();
  controlPageHome();
}
