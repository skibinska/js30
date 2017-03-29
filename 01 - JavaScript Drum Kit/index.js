(function (window){
  'use strict';

  window.addEventListener('keydown', playSound);

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function playSound (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

})(window);
