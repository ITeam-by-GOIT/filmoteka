import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';
import { render } from './renderGallery';
import { spinnerMethod } from './spinner';
import { newToastr } from './toastrOptions';

export async function renderMovieList(key, page) {
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }

  refs.movieGallerySection.dataset.page = key;
  const data = localStorageAPI.getDataPerPage(key, page);
  if (!data || data.length === 0) {
    spinnerMethod.removeSpinner();
    refs.movieGallerySection.firstElementChild.innerHTML = `<div class="notification-icon-wrapper"><svg class="notification-cat-icon" width="250" height="250">
        <use href="/sprite.5ec50489.svg#icon-notificationCat"></use>
      </svg></div>`;
    return;
  }
  try {
    render(data);
  } catch (e) {
    spinnerMethod.removeSpinner();
  }
}
