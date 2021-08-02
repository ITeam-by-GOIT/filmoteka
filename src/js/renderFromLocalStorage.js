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
    return;
    //тут будет картинка с котиком
  }
  try {
    render(data);
  } catch (e) {
    spinnerMethod.removeSpinner();
  }
}
