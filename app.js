'use strict';

function timer() {
  const newYear = new Date(2026, 0, 1).getTime();
  const options = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  setInterval(() => {
    console.log(new Intl.DateTimeFormat(navigator.language, options).format(newYear - Date.now()));
  }, 1000);
}

console.log(timer());
