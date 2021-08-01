const checkbox = document.querySelector('#theme-switch-toggle');
checkbox.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyHtml = document.querySelector('body');
function changeTheme(evt) {
  if (evt.target.checked) {
    bodyHtml.classList.toggle(Theme.DARK);
    bodyHtml.classList.toggle(Theme.LIGHT);

    localStorage.setItem('key', Theme.DARK);
  } else if (!evt.target.checked) {
    bodyHtml.classList.toggle(Theme.LIGHT);
    bodyHtml.classList.toggle(Theme.DARK);
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
