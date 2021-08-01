import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import Fetch from './fetchAPI';
import { refs } from './refs';

const fetch = new Fetch();

document.addEventListener('DOMContentLoaded', renderTrending);

async function renderTrending() {
  try {
    const trends = await fetch.searchByTrending().then(data => {
      return data.results;
    });
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renderGalleryMarkup(trends, genres);
    const cardsGallery = movieCardTemplate(result);
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
  } catch (e) {
    console.log('this is error:', e);
  }
}
function renderGalleryMarkup(data, list) {
  return data.map(obj => ({
    ...obj,

    genres_short_list: createGenres(obj, list),
    release_date: createCardYear(obj),
  }));
}

function createGenres(obj, list) {
  const movieCardGenresList = obj.genre_ids;
  const movieCardGenresArray = list.filter(item => movieCardGenresList.includes(item.id));
  const mapedGenres = movieCardGenresArray.map(({ name }) => name);

  let movieGenreArraySlice = [];
  if (mapedGenres.length < 3) {
    movieGenreArraySlice = mapedGenres;
  } else {
    movieGenreArraySlice = mapedGenres.slice(0, 2);
    movieGenreArraySlice.push('Other');
  }

  return movieGenreArraySlice.join(', ');
}

function createCardYear(obj) {
  return obj.release_date ? obj.release_date.slice(0, 4) : '';
}
export { renderTrending, renderGalleryMarkup, createGenres, createCardYear };