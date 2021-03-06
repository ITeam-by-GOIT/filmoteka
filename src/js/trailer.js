import { refs } from "./refs";
import FetchAPI from "./fetchAPI";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
// const fetch = new FetchAPI;

export async function watchTrailer() {
    const id = document.querySelector('.modal-wrapper').dataset.id
    const fetchResult = await FetchAPI.getTrailers(id);
    refs.trailerBackdrop.classList.remove('is-hidden')
    if (fetchResult.results.length === 0) {
        refs.trailerBackdrop.insertAdjacentHTML(
            'afterbegin',
            '<div class="js-notification-wrapper"><svg class="notification-cat-icon" width="280" height="280"><use href="./sprite.svg#icon-notificationCatTrailer"></use></svg></div>',
        );
        return
    }

    let resultArray = fetchResult.results.find(item => (item.type === 'Trailer' && item.site === 'YouTube'))
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: resultArray.key,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};
refs.trailerBackdrop.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-hidden');
    refs.trailerBackdrop.innerHTML = '';
    refs.trailerBackdrop.innerHTML = '<div id="player"></div>';
    stopVideo();
})

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
}
function stopVideo() {
    player.stopVideo();
}