import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const  KEY_FOR_LOCAL_STORAGE ='videoplayer-current-time'
const player = new Player(iframe);
const startTime = load(KEY_FOR_LOCAL_STORAGE);

const save = (key, value) => {
  try {
    const valueToSave = JSON.stringify(value);
    localStorage.setItem(key, valueToSave);
  } catch (error) {
    console.error('Set state error:', error.message);
  }
};

const load = key => {
  try {
    const valueSaved = localStorage.getItem(key);
    return valueSaved === null ? undefined : JSON.parse(valueSaved);
  } catch (error) {
    console.error('Get state error', error.message);
  }
};

export default {
  save,
  load,
};

const onPlay = function (data) {
  console.log(data.seconds);
  save('videoplayer-current-time', data.seconds);
};


player
  .setCurrentTime(startTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));

// console.log(load("videoplayer-current-time"));
// player.on('pause', e => console.log(e))

/*
Zadanie 2 - odtwarzacz wideo
W HTML znajduje się <iframe> z wideo na Vimeo. Napisz skrypt, który będzie zapisywał aktualny czas odtwarzania wideo w local storage i, podczas przeładowywania strony, kontynuuje odtwarzanie wideo od danego momentu.

<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

Wykonuj to zadanie w plikach 02-video.html i 02-video.js. Rozbij je na kilka podzadań:

Zapoznaj się z dokumentacją biblioteki odtwarzacza Vimeo.
Dodaj bibliotekę jako zależność projektu poprzez npm.
Inicjalizuj odtwarzacz w pliku skryptu tak, jak opisano w sekcji pre-existing player, ale weź pod uwagę to, że odtwarzacz dodano jako pakiet npm, a nie poprzez CDN.
Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - aktualizacja czasu odtwarzania.
Zapisuj czas odtwarzania w local storage. Niech kluczem do storage będzie "videoplayer-current-time".
Do przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu.
Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę.
*/
