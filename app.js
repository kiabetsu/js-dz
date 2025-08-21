const crypto = (string) => {
  let stringArray = string.split('');
  let firstPart = stringArray.slice(0, stringArray.length / 2).reverse();
  let secondPart = stringArray.slice(stringArray.length / 2).reverse();

  const res = firstPart.join('') + secondPart.join('');
  return res;
};

console.log(crypto('password'));

const check = (string, check) => {
  let stringArray = string.split('');
  let firstPart = stringArray.slice(0, stringArray.length / 2).reverse();
  let secondPart = stringArray.slice(stringArray.length / 2).reverse();

  const res = firstPart.join('') + secondPart.join('');
  return res === check;
};

console.log(check('ssapdrow', 'wrong'));
