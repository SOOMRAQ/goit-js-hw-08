import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const currentTime = localStorage.getItem('your-current-time');

function saveCurrentTime({ seconds }) {
  //   console.log(seconds);
  localStorage.setItem('your-current-time', seconds);
}

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));
