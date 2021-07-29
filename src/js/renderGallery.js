import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import Fetch from './fetchAPI';

const cardsList = document.querySelector('.gallery-list-js');
const homeBtn = document.querySelector('#home_page');
const fetch = new Fetch();

document.addEventListener('DOMContentLoaded', renderTrending);
// homeBtn.addEventListener('click', renderHomePage);
// function renderHomePage() {
//   renderTrending();
// }

export default async function renderTrending() {
  try {
    const trends = await fetch.searchByTrending().then(data => {
      return data.results;
    });
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(trends, genres);
    cardsList.innerHTML = movieCardTemplate(result);
    console.log(result);
  } catch (e) {
    console.log('this is error:', e);
  }
}
function renederGalleryMarckUp(data, list) {
  return data.map(obj => ({
    ...obj,
    popularity_rate: createPopularityRate(obj),
    genres_short_list: createGenres(obj, list),
  }));
}
function createPopularityRate(obj) {
  return obj.popularity ? obj.popularity.toFixed(1) : '-';
}
function createGenres(obj, list) {
  const genreList = obj.genre_ids;
  const genreArray = list.filter(item => genreList.includes(item.id));
  const genreArraySlise = genreArray.slice(0, 3);
  const normalizedShortGenres = genreArraySlise.map(el => el.name).join(', ');
  return normalizedShortGenres;
}
