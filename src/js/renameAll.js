import { refs } from './refs.js';

export default function renameAll(language) {
  if (language === 'ru-RU') {
    refs.linkHome.textContent = 'Главная';
    refs.linkMyLibrary.textContent = 'Избранное';
    refs.searchInput.setAttribute('placeholder', 'Введите Ваш запрос');
    refs.watchedLibrary.textContent = 'Просмотренное';
    refs.queueLibrary.textContent = 'Отложенные';
  }
  if (language === 'en-US') {
    refs.linkHome.textContent = 'Home';
    refs.linkMyLibrary.textContent = 'My library';
    refs.searchInput.setAttribute('placeholder', 'Enter your request');
    refs.watchedLibrary.textContent = 'Watched';
    refs.queueLibrary.textContent = 'Queue';
  }
}
