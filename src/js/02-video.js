
import player from '@vimeo/player';
import Player from '@vimeo/player';
// import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const playerEl = new Player(iframeEl);


const onPlayEl = ({ seconds }) => {
    // console.log('time', seconds)
   localStorage.setItem('videoplayer-current-time', seconds)
}

playerEl.on('timeupdate', throttle(onPlayEl, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');

playerEl.setCurrentTime(currentTime).then(function(seconds) {
 
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
          
            break;
    }
});