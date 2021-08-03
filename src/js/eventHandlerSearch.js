import { refs } from './refs.js';
import onSubmitHandler from './eventListenerSearch.js';
import { renderTrending } from './renderGallery.js';

refs.searchForm.addEventListener('submit', onSubmitHandler);
refs.searchInput.addEventListener('input', (e) => {
    if (!e.target.value) {
        console.log(e)
        renderTrending(1);
    }
})