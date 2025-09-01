const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const uniqKeys = new Set(arr.keys());

const newArr = [...uniqKeys]
  .map((key) => arr.find((element) => element.id === key))
  .filter((element) => element != undefined);

console.log(newArr);
