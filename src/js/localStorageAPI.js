let watchedMoviesList = [];
let queueMoviesList = [];

class localStorageAPI {
  constructor() {}

  static set(movieObj, listArr, key) {
    listArr.push(movieObj);
    localStorage.setItem(key, JSON.stringify(listArr));
  }

  static delete(movieObj, listArr, key) {
    const movieIndex = listArr.indexOf(movieObj);
    listArr.splice(movieIndex, 1);
    localStorage.setItem(key, JSON.stringify(listArr));
  }
}

export { watchedMoviesList, queueMoviesList, localStorageAPI };
