const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const seen = new Set();
const newArr = arr.filter((el) => {
  if (seen.has(el.id)) {
    return false;
  } else {
    seen.add(el.id);
    return true;
  }
});

console.log(newArr);
