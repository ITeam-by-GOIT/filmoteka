import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import FetchAPI from './fetchAPI';
import { refs } from './refs';
import { renederGalleryMarckUp, createGenres, createCardYear } from './renderGallery.js';
import { spinnerMethod } from './spinner';
const debounce = require('lodash.debounce');

const fetch = new FetchAPI();
// const footer = document.querySelector('.footer-container');
let page = 1;
// const spinner = refs.spinnerPreloader;
// const anchor = refs.aboutTeam;

const observer = new IntersectionObserver(debounce(onRender, 1000), { threshold: 0 });
observer.observe(refs.aboutTeam);

async function onRender(entries) {
  if (entries[0].isIntersecting) {
    spinnerMethod.addSpinner();
    if (refs.galleryList.children.length !== 0) {
      page += 1;
      let resultList = await fetch.searchByTrending(undefined, page); //запрос следующей страницы
      if (page > resultList.total_pages) {
        spinnerMethod.removeSpinner();
        return;
      } else {
        render(resultList.results);
        spinnerMethod.removeSpinner();
      }
    } else {
      return;
    }
  }
}

async function render(data) {
  spinnerMethod.addSpinner();
  try {
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(data, genres);
    refs.galleryList.insertAdjacentHTML('beforeend', movieCardTemplate(result));
    const img = document.querySelectorAll('.js-card-img');
    if (refs.galleryList.lastElementChild.complete) {
      spinnerMethod.removeSpinner();
    }
  } catch (e) {
    console.log("Opps we got some error here...don't panic! we already did it for you :)", e);
    spinnerMethod.removeSpinner();
  }
}
