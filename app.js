const query = (obj) => {
  let resQuery = '';
  for (let key in obj) {
    resQuery += `${key}=${obj[key]}&`;
  }
  if (resQuery.at(-1) === '&') {
    resQuery = resQuery.slice(0, -1);
  }
  return resQuery;
};
const testArr = {
  search: 'Вася',
  take: 10,
};
console.log(query(testArr));
