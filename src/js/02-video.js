import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
}