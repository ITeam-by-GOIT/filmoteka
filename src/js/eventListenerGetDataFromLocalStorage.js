import { refs } from './refs.js';

function onWatchedHandler (){ 
    let array;
    const data = localStorage.getItem('watched')
    if(data.length === 0) {
        return
    }
    array = JSON.parse(data);
    return array;
}

function onQueueHandler () {
    let array;
    const data = localStorage.getItem('queue');
    if(data.length === 0) {
        return
    }
    array = JSON.parse(data);
    return array;
}

export {onWatchedHandler, onQueueHandler}



