import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import FetchAPI from './fetchAPI';
import { refs } from './refs';
import { renederGalleryMarckUp, createGenres, createCardYear } from './renderGallery.js';
import spinner from './spinner.js';
const fetch = new FetchAPI();
let page = 1;
const debounce = require('lodash.debounce');
// const anchor = refs.aboutTeam;
const observer = new IntersectionObserver(debounce(onRender, 500), { threshold: 0 });
observer.observe(refs.aboutTeam);
async function onRender() {
  page += 1;

  let resultList = await fetch.searchByTrending(undefined, page); //запрос следующей страницы

  render(resultList.results); // рендер результата нового запроса
}

async function render(resultList) {
  try {
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(resultList, genres);

    // refs.galleryList.innerHTML = '';
    return refs.galleryList.insertAdjacentHTML('beforeend', movieCardTemplate(result));
  } catch (e) {
    console.log("Opps we got some error here...don't panic! we already did it for you :)", e);
  }
}
