const myFilter = (arr, remove) => {
  let newArray = [];
  for (let element of arr) {
    if (!remove(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

console.log(myFilter([3, 6, 9, 2], (element) => element > 5));
