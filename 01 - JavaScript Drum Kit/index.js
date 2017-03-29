(function (window){
  'use strict';

  // const keys = document.querySelectorAll('.key');

  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', removeTransition)
  }

  function removeTransition (e) {
    if (e.propertyName !== 'transfrom') return;
    console.log('removed');
    this.classList.remove('playing');
  }

})(window);
