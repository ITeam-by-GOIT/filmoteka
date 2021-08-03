import { refs } from "./refs";
import FetchAPI from "./fetchAPI";
import modalAppearanceToggle from "./modalAppearanceToggle";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const fetch = new FetchAPI;

export async function watchTrailer() {
    const id = document.querySelector('.modal-wrapper').dataset.id
    const fetchResult = await fetch.getTrailers(id);
    let resultArray = fetchResult.results.find(item => item.type === 'Trailer')
    // refs.trailerIframe.src = `https://www.youtube.com/embed/${resultArray.key}`
    refs.cardContainer.innerHTML = '';
    modalAppearanceToggle()
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: resultArray.key,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    function onYouTubeIframeAPIReady() { player }
    console.log(player)
    refs.trailerBackdrop.classList.remove('is-hidden')
};
refs.trailerBackdrop.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-hidden');
    stopVideo();
    refs.trailerBackdrop.innerHTML = '<div id="player"></div>'
})

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() { player }

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
}
function stopVideo() {
    player.stopVideo();
}