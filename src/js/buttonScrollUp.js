const buttonScrollUp = document.querySelector('.js-buttonScrollUp');

window.addEventListener('scroll', onScroll);
buttonScrollUp.addEventListener('click', onButtonScrollUp);

function onScroll() {
  const scrolled = window.pageYOffset;
  const clientHeight = document.documentElement.clientHeight;

  if (scrolled > clientHeight) {
    buttonScrollUp.classList.add('buttonScrollUp--show');
  }
  if (scrolled < clientHeight) {
    buttonScrollUp.classList.remove('buttonScrollUp--show');
  }
}

function onButtonScrollUp() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(onButtonScrollUp, 0);
  }
}
