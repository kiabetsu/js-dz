const crypto = (string) => {
  let stringArray = string.split('');
  let firstPart = stringArray.slice(0, stringArray.length / 2).reverse();
  let secondPart = stringArray.slice(stringArray.length / 2);
  const firstLet = secondPart.at(0);
  const lastLet = secondPart.at(-1);
  secondPart.shift();
  secondPart.unshift(lastLet);
  secondPart.pop();
  secondPart.push(firstLet);

  const res = firstPart.join('') + secondPart.join('');
  return res;
};

console.log(crypto('password'));

const check = (string, check) => {
  const res = crypto(string);
  console.log(res);
  return res === check;
};

console.log(check('ssapdorw', 'password'));
