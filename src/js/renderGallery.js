import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import Fetch from './fetchAPI';
import { refs } from './refs';

const fetch = new Fetch();

document.addEventListener('DOMContentLoaded', renderTrending);

export default async function renderTrending() {
  try {
    const trends = await fetch.searchByTrending().then(data => {
      return data.results;
    });
    const genres = await fetch.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(trends, genres);
    const cardsGallery = movieCardTemplate(result);
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
  } catch (e) {
    console.log('this is error:', e);
  }
}
function renederGalleryMarckUp(data, list) {
  return data.map(
    obj => ({
      ...obj,

      genres_short_list: createGenres(obj, list),
      release_date: createCardYear(obj),
    }),
    // console.log(genres_short_list);
  );
}

function createGenres(obj, list) {
  const movieCardGenresList = obj.genre_ids;
  const movieCardGenresArray = list.filter(item => movieCardGenresList.includes(item.id));
  const movieGenreArraySlise = movieCardGenresArray.slice(0, 3);

  const createShortListGenres = movieGenreArraySlise.map(el => el.name).join(', ');

  return createShortListGenres;
}

function createCardYear(obj) {
  return obj.release_date ? obj.release_date.slice(0, 4) : '';
}
