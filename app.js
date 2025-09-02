function throwD(dice) {
  dice = Number(dice.replace('d', ''));
  const correctNumb = [4, 6, 8, 10, 12, 16, 20];
  console.log(correctNumb.includes(dice));
  if (correctNumb.includes(dice)) {
    return Math.trunc(Math.random() * dice + 1);
  } else {
    console.log('incorrect number to throw');
    return null;
  }
}

console.log(throwD('d20'));
