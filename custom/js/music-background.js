const audio = document.createElement('audio');
audio.src = 'custom/mp3/music-background.mp3';
audio.preload = 'auto';

document.addEventListener('click', musicPlay);

function musicPlay() {
    audio.play();
    document.removeEventListener('click', musicPlay);
}