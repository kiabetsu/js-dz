function throwD(number) {
  if (number >= 2 && number % 2 === 0 && number <= 20) {
    return Math.round(Math.random() * (number - 1) + 1);
  } else {
    console.log('incorrect number to throw');
    return null;
  }
}

console.log(throwD(20));
