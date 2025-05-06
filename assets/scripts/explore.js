// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const dropDown = document.querySelector("select");
  const textArea = document.querySelector('#text-to-speak');
  const img = document.querySelector("img");
  
  // populate list of voices
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const curr = document.createElement("option");
    curr.textContent = voices[i].name;
    dropDown.appendChild(curr);
  }

  const button = document.querySelector("button");
  button.addEventListener('click', function() {
    // grab text contents
    let text = textArea.value;

    // make synthesizer speak & change image
    const toSpeak = new SpeechSynthesisUtterance(text);
    for (let i = 0; i < voices.length; i++) {
      if (dropDown.value == voices[i].name) {
        toSpeak.voice = voices[i];
      }
    }
    
    synth.speak(toSpeak);
  });

  setInterval(function() {
    if (synth.speaking) {
      img.src = 'assets/images/smiling-open.png';
    } else {
      img.src = 'assets/images/smiling.png';
    }
  }, 100);
}