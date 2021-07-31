let watchedMoviesList = [];
let queueMoviesList = [];

class localStorageAPI {
  constructor() {}
  static get KEYS() {
    return {
      WATCHED: 'watched',
      QUEUE: 'queue',
      THEME: 'theme',
    };
  }
  static get(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  static set(movieObj, key) {
    // listArr.push(movieObj);
    localStorage.setItem(key, JSON.stringify(movieObj));
  }

  static delete(movieObj, listArr, key) {
    const movieIndex = listArr.indexOf(movieObj);
    listArr.splice(movieIndex, 1);
    localStorage.setItem(key, JSON.stringify(listArr));
  }
}

export { watchedMoviesList, queueMoviesList, localStorageAPI };
