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

  static set(key, Obj) {
    if (!localStorageAPI.get(key)) {
      localStorage.setItem(key, JSON.stringify(Obj));
      return;
    }
    let list = localStorageAPI.get(key);
    if (list.find(item => item.id === Obj.id) !== undefined) {
      return;
    }
    list.push(Obj);
    localStorage.setItem(key, JSON.stringify(list));
  }

  static delete(key, Obj) {
    if (!localStorageAPI.get(key)) {
      return;
    }
    let list = localStorageAPI.get(key);
    const searchIndex = list.findIndex(item => item.id === Obj.id);
    if (searchIndex !== -1) {
      list.splice(searchIndex, 1);
      localStorage.setItem(key, JSON.stringify(list));
    }
  }
}

export { localStorageAPI };
