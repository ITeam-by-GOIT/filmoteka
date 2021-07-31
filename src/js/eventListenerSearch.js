import Fetch from './fetchAPI.js';
import { refs } from './refs.js';
import { newToastr } from './toastrOptions.js';

export default async function onSubmitHandler(e) {
  e.preventDefault();

  const query = refs.searchInput.value;
  const searchClass = new Fetch();
  try {
    const data = await searchClass.searchByInputQuery(query);
    return data;
  } catch (e) {
    newToastr.error('Unsuccessful results. Try again!');
    console.log(`Oops we got some error here...don't panic! we already did it for you :)`, e);
  }
}
