import { refs } from './refs.js';
export default function modalAppearanceToggle() {
  refs.modalBackdrop.classList.toggle('is-hidden');
}
