function throwD(number) {
  const correctNumb = [4, 6, 8, 10, 12, 16, 20];
  if (correctNumb.includes(number)) {
    return Math.trunc(Math.random() * number + 1);
  } else {
    console.log('incorrect number to throw');
    return null;
  }
}

console.log(throwD(20));
