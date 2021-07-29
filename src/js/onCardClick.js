import Fetch from './fetchAPI.js';
import { refs } from './refs.js';
import aboutMovieTemplates from '../templates/aboutMovieTemplates.hbs';

const newsPictureApi = new Fetch();

refs.galleryList.addEventListener('click', onCardClick);

function onCardClick(eve) {
  const isCardMovie = eve.target.closest('.gallery-items');
  if (!isCardMovie) {
    return;
  }
  const idMovie = isCardMovie.dataset.index;
  onOpenModal(idMovie);
}

function onOpenModal(id) {
  refs.modalBackdrop.classList.remove('is-hidden');

  newsPictureApi.searchByMovieId(id).then(movie => {
    refs.modalCloseBtn.insertAdjacentHTML('afterend', aboutMovieTemplates(movie));
  });
}
