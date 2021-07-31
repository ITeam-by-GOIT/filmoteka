import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import FetchAPI from './fetchAPI';
import { refs } from './refs';
import { renederGalleryMarckUp, createGenres, createCardYear } from './renderGallery.js';
const fetch = new FetchAPI();
const footer = document.querySelector('.footer-container');
let page = 1;
const spinner = refs.spinnerPreloader;
// const anchor = refs.aboutTeam;

const observer = new IntersectionObserver(onRender, { threshold: 0 });
observer.observe(footer);

async function onRender() {
  spinner.classList.remove('preloader-js');
  if (refs.galleryList.children.length !== 0) {
    page += 1;
    // spinner();
    // console.log(spinner);

    let resultList = await fetch.searchByTrending(undefined, page); //запрос следующей страницы
    console.log(resultList);

    if (page > resultList.total_pages) {
      return;
    } else {
      render(resultList.results);
    }
  } else {
    return;
  }
}

async function render(data) {
  try {
    spinner.classList.add('preloader-js');
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(data, genres);

    refs.galleryList.insertAdjacentHTML('beforeend', movieCardTemplate(result));

    const img = document.querySelectorAll('.js-card-img');
    if (refs.galleryList.lastElementChild.complete) {
      spinner.classList.remove('preloader-js');
    }
  } catch (e) {
    console.log("Opps we got some error here...don't panic! we already did it for you :)", e);
  }
}
