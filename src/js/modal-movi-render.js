import movieDetailsCard from '../templates/aboutMovieTemplates.hbs';
import NewFetchApi from './fetchAPI';

const newFetchApi = new NewFetchApi();
const wrapper = document.querySelector('.modal');

async function renderMovieDetails() {
  const response = await newFetchApi.searchByMovieId(1256);

  const markup = movieDetailsCard(response);

  wrapper.insertAdjacentHTML('beforeend', markup);

  const imgPlay = document.querySelector('.modal-img-play');
  if (imgPlay) {
    imgPlay.addEventListener('click', function (e) {
      e.preventDefault();
      const html =
        '<div class="backdrop js-backdrop"><div class="modal"><button type="button" class="modal-close-btn js-close-btn"><svg class="modal-close-btn__icon" width="14" height="14"><use href="./images/sprite.svg#icon-close"></use></svg></button></div></div>';
      if (e.target.classList.contains('modal-img-play')) {
        // console.log('hgkghdg');
        // document.querySelector('BODY').innerHTML = html;
        // insertAdjacentHTML('beforeend', html);
        // body.insertAdjacentHTML('beforeend', html);
      }
    });
  }
}

renderMovieDetails();

// const treiler = newFetchApi.searchByMovieId(1256);

// console.log(treiler.video);
