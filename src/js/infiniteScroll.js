import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import FetchAPI from './fetchAPI';
import { refs } from './refs';
import renderGallery from './renderGallery.js';
const fetch = new FetchAPI();
console.log(fetch);
console.log(fetch.searchByTrending);

console.log(refs.aboutTeam);

// //--------------------------бесконечный скролл-------------------------

// window.addEventListener('scroll', onScroll);
// // в функцию onScroll прокидывается соответствующий вызов await fetch в качестве первого параметра и
// // соответствующий рендеринг в качестве второго параметра
// let page = 1;
// async function onScroll() {
//   const documentRect = document.documentElement.getBoundingClientRect();

//   if (documentRect.bottom <= document.documentElement.clientHeight) {
//     page += 1;

//     let resultList = await fetch.searchByTrending(undefined, page); //запрос следующей страницы
//     console.log(resultList);

//     // render(resultList); // рендер результата нового запроса
//   }
// }
// //--------------------------------------------------------
let page = 1;
const debounce = require('lodash.debounce');
// const anchor = refs.aboutTeam;

const observer = new IntersectionObserver(debounce(onRender, 1500), { threshold: 0 });
observer.observe(refs.aboutTeam);
async function onRender() {
  page += 1;

  let resultList = await fetch.searchByTrending(undefined, page); //запрос следующей страницы
  console.log(resultList);

  //     // render(resultList); // рендер результата нового запроса
}
