import { refs } from './refs.js';

document.body.onload = function () {
  setTimeout(function () {
    const preloader = refs.spinnerPreloader;
    if (!preloader.classList.contains('preloader-js')) {
      preloader.classList.add('preloader-js');
    }
  }, 500);
};
// const preloader = refs.spinnerPreloader;
// const preloaderSpinner = {
//   addSpinner: preloader.classList.remove('preloader-js');
//   removeSpinner: preloader.classList.add('preloader-js');

// }
