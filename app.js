'use strict';

function timer() {
  const newYear = new Date(2025, 11, 31, 23, 59, 59);
  let today = new Date();

  setInterval(() => {
    document.querySelector('.timer').innerHTML = `${
      newYear.getMonth() - today.getMonth()
    } месяцев, ${newYear.getDate() - today.getDate()} дней, ${
      newYear.getHours() - today.getHours()
    } дней, ${newYear.getMinutes() - today.getMinutes()} минут, ${
      newYear.getSeconds() - today.getSeconds()
    } секунд`;
    console.log(
      `${newYear.getMonth() - today.getMonth()} месяцев, ${
        newYear.getDate() - today.getDate()
      } дней, ${newYear.getHours() - today.getHours()} дней, ${
        newYear.getMinutes() - today.getMinutes()
      } минут, ${newYear.getSeconds() - today.getSeconds()} секунд`,
    );
    today = new Date();
  }, 1000);
}

console.log(timer());
