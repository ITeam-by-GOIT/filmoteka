import Fetch from './fetchAPI.js';
import movieCardTemplate from '../templates/movieCardTemplate.hbs';

export default async function onSubmitHandler(e) {
  e.preventDefault();

  const query = document.querySelector('.js-search-control').value;
  const searchClass = new Fetch();
  try {
    const data = await searchClass.searchByInputQuery(query);
    console.log(data);
    return data;
  } catch (e) {
    console.log(`Opps we got some error here...don't panic! we already did it for you.`, e);
  }
}
