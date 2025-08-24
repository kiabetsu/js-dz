const number = '4561-2612-1534-5464';

const luna = (number) => {
  number = number.replace(/-/g, '');
  if (!number.length === 16) {
    return false;
  }
  number = number.split('');
  number = number
    .map((value, i) => {
      if (i % 2 === 0) {
        return value * 2;
      } else {
        return value;
      }
    })
    .map((value, i) => {
      if (i % 2 === 0) {
        if (value > 9) {
          return value - 9;
        } else {
          return value;
        }
      }
      return value;
    });

  console.log(number);

  const sumNumber = number.reduce((acc, value) => (acc += Number(value)), 0);
  console.log(sumNumber);

  if (sumNumber % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(luna(number));
