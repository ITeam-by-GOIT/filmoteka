import { localStorageAPI } from './localStorageAPI.js'
export default function onWatchedHandler(key) {
    const data = localStorageAPI.get(key);
    if (!data || data.length === 0) {
        return 1;
    }

    return data;

}