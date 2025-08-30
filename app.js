function getNumbers() {
  const first = document.querySelector('.firstInput').value;
  const second = document.querySelector('.secondInput').value;
  return { first, second };
}

function getResult(res) {
  document.querySelector('.result').innerText = `Результат: ${res}`;
}

function plus() {
  const { first, second } = getNumbers();
  const res = Number(first) + Number(second);
  getResult(res);
}

function minus() {
  const { first, second } = getNumbers();
  const res = Number(first) - Number(second);
  getResult(res);
}

function delit() {
  const { first, second } = getNumbers();
  const res = Number(first) / Number(second);
  getResult(res);
}

function power() {
  const { first, second } = getNumbers();
  const res = Number(first) * Number(second);
  getResult(res);
}
