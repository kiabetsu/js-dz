'use strict';

function timer() {
  const newYear = new Date(2026, 0, 1);
  let today = new Date();

  setInterval(() => {
    let diff = newYear - today;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.querySelector(
      '.timer',
    ).innerHTML = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    today = new Date();
  }, 1000);
}

// console.log(timer());
timer();
