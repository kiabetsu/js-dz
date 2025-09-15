const fast = new Promise((resolve) => setTimeout(() => resolve('Быстрый!'), 100));
const slow = new Promise((resolve) => setTimeout(() => resolve(new Error('kek')), 99));

const race = async (arr) => {
  return await new Promise((resolve, reject) => {
    arr.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

console.log(race([fast, slow]));
