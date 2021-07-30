import { refs } from './refs.js';
import onSubmitHandler from './eventListenerSearch.js';




export default function () {
    refs.searchForm.addEventListener('submit', onSubmitHandler);
}

