const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const uniqKeys = new Set(arr.map((el) => el.id));
console.log(uniqKeys);
const newArr = [...uniqKeys].map((key) => arr.find((element) => element.id === key));

console.log(newArr);
