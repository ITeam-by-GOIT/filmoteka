import Fetch from './fetchAPI.js';
import { refs } from './refs.js';
import movieCardTemplate from '../templates/movieCardTemplate.hbs';
import { renederGalleryMarckUp, createGenres, createCardYear } from './renderGallery.js';


export default async function onSubmitHandler(e) {
  e.preventDefault();

  const query = refs.searchInput.value;
  const searchClass = new Fetch();
  try {
    const data = await searchClass.searchByInputQuery(query);
    const results = data.results;
    const genres = await searchClass.getGenres().then(list => {
      return list.genres;
    });
    const result = await renederGalleryMarckUp(results, genres);
    refs.galleryList.innerHTML = '';
    refs.galleryList.insertAdjacentHTML('beforeend', movieCardTemplate(result));
    return data;
  } catch (e) {
    console.log(`Opps we got some error here...don't panic! we already did it for you :)`, e);
  }
}
