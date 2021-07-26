document.body.onload = function () {
  setTimeout(function () {
    const preloader = document.getElementById('preloader-page');
    if (!preloader.classList.contains('preloader-js')) {
      preloader.classList.add('preloader-js');
    }
  }, 500);
};
