import { refs } from './refs.js';

document.body.onload = function () {
  setTimeout(function () {
    const preloader = refs.spinnerPreloader;
    if (!preloader.classList.contains('preloader-js')) {
      preloader.classList.add('preloader-js');
    }
  }, 1000);
};
