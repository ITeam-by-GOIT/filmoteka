import fetchAPI from './fetchAPI.js';
import { refs } from './refs.js';
import { renderSearchResult } from './renderGallery.js';

export default async function onSubmitHandler(e) {
  e.preventDefault();
  const query = refs.searchInput.value;
  renderSearchResult(query, 1);
}
