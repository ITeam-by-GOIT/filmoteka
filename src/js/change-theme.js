const checkbox = document.querySelector('#theme-switch-toggle');
checkbox.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyHtml = document.querySelector('body');
const footerTheme = document.querySelector('.footer-container');
const modalTheme = document.querySelector('.js-modal');

function changeTheme(evt) {
  if (evt.target.checked) {
    bodyHtml.classList.toggle(Theme.DARK);
    bodyHtml.classList.toggle(Theme.LIGHT);
    footerTheme.classList.toggle(Theme.DARK);
    footerTheme.classList.toggle(Theme.LIGHT);
    modalTheme.classList.toggle(Theme.DARK);
    modalTheme.classList.toggle(Theme.LIGHT);

    localStorage.setItem('key', Theme.DARK);
  } else if (!evt.target.checked) {
    bodyHtml.classList.toggle(Theme.LIGHT);
    bodyHtml.classList.toggle(Theme.DARK);
    footerTheme.classList.toggle(Theme.DARK);
    footerTheme.classList.toggle(Theme.LIGHT);
     modalTheme.classList.toggle(Theme.DARK);
     modalTheme.classList.toggle(Theme.LIGHT);
    localStorage.setItem('key', Theme.LIGHT);
  }
}

saveTheme();
function saveTheme() {
  const saveKey = localStorage.getItem('key');
  if (!saveKey) {
    bodyHtml.classList.add(Theme.LIGHT);
    localStorage.setItem('key', bodyHtml.classList);
  } else {
    bodyHtml.classList.add(saveKey);
    if (saveKey === Theme.DARK) {
      checkbox.checked = true;
    }
  }
}

saveFooterTheme();
function saveFooterTheme() {
  const saveKey = localStorage.getItem('key');
  if (!saveKey) {
    footerTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('key', footerTheme.classList);
  } else {
    footerTheme.classList.add(saveKey);
    if (saveKey === Theme.DARK) {
      checkbox.checked = true;
    }
  }
}

saveModalTheme();
function saveModalTheme() {
  const saveKey = localStorage.getItem('key');
  if (!saveKey) {
    modalTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('key', footerTheme.classList);
  } else {
    modalTheme.classList.add(saveKey);
    if (saveKey === Theme.DARK) {
      checkbox.checked = true;
    }
  }
}
