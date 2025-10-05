const user = {
  name: 'Vasiliy',
  age: 8,
  skills: ['typescript', 'javascript'],
};

function pickObjectKeys<T extends object, K extends keyof T>(
  obj: T,
  properties: K[],
): Record<K, any> {
  let res: Record<K, any>;
  res = {} as Record<K, any>;
  for (let property of properties) {
    if (property in obj) {
      res[property] = obj[property];
    }
  }
  return res;
}
console.log(pickObjectKeys(user, ['age', 'skills']));
