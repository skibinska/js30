(function (){
  'use strict';

  const secondHand = document.getElementsByClassName('second-hand')[0];
  const minHand = document.getElementsByClassName('min-hand')[0];
  const hourHand = document.getElementsByClassName('hour-hand')[0];

  function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval (setDate, 1000);
})();
