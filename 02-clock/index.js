(function (){
  'use strict';

  const secondHand = document.getElementsByClassName('second-hand')[0];
  const minHand = document.getElementsByClassName('min-hand')[0];
  const hourHand = document.getElementsByClassName('hour-hand')[0];
  const allHands = document.querySelectorAll('.hand');

  function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    if (secondsDegrees === 90) {
      allHands.forEach(hand => hand.style.transition = 'none');
    } else {
      allHands.forEach(hand => hand.style.transition = '');
    }

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval (setDate, 1000);
})();
