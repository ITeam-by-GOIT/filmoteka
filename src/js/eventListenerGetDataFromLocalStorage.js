import { localStorageAPI } from './localStorageAPI.js'
export default function onWatchedHandler(key) {
    const data = localStorageAPI.get(key);
    if (data.length === 0) {
        return
    }

    return data;

}