const sortArr = (arr, ASC = true) => {
  for (const i in arr) {
    for (const j in arr) {
      switch (ASC) {
        case true:
          if (arr[i] < arr[j]) {
            const arrI = arr[i];
            const arrJ = arr[j];
            arr[i] = arrJ;
            arr[j] = arrI;
          }
          break;
        case false:
          if (arr[i] > arr[j]) {
            const arrI = arr[i];
            const arrJ = arr[j];
            arr[i] = arrJ;
            arr[j] = arrI;
          }
          break;
      }
    }
  }
  return arr;
};

console.log(sortArr([1, 40, -5, 10, 0], false));
