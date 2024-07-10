const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const video = document.getElementById('hero-video');  // Select the video element

let load = 0;

// Ensure the video is muted for autoplay
video.muted = true;

 // Wait for the video to be ready before playing
 video.addEventListener('canplay', () => {
  video.play();
});
video.style.opacity = 0;


let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // Gradually make the video visible as the blur reduces
  video.style.opacity = scale(load, 0, 100, 0, 1);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};