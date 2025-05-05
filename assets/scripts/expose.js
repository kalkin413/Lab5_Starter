// expose.js

window.addEventListener('DOMContentLoaded', init);

function selector(dropDown, audio) {
  const image = document.querySelector("img");
  
  if (dropDown.value == 'air-horn') {
    image.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  } else if (dropDown.value == 'car-horn')
  {
    image.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  } else if (dropDown.value == 'party-horn')
  {
    image.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function volumeSetter(volume, audio) {
  const image = document.querySelector("div img");

  audio.volume = volume.value / 100;

  if (volume.value == 0) {
    image.src = 'assets/icons/volume-level-0.svg';
  } else if (volume.value < 33) {
    image.src = 'assets/icons/volume-level-1.svg';
  } else if (volume.value < 67) {
    image.src = 'assets/icons/volume-level-2.svg';
  } else if (volume.value <= 100) {
    image.src = 'assets/icons/volume-level-3.svg';
  }
}

function init() {
  const dropDown = document.querySelector("select");
  const audio = document.querySelector("audio");
  const play = document.querySelector("button");
  const volume = document.querySelector("input");
  const confetti = new JSConfetti();

  // change images/audio file selection
  selector(dropDown, audio);
  dropDown.addEventListener('input', function() {
    selector(dropDown, audio);
  });
  
  // play sound button
  play.addEventListener('click', function() {
    console.log("playing audio");
    audio.play();

    if (dropDown.value == 'party-horn') {
      confetti.addConfetti();
    }
  });

  // change volume
  volumeSetter(volume, audio);
  volume.addEventListener('input', function() {
    volumeSetter(volume, audio);
  });
}