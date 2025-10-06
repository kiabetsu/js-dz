interface IA {
  a: number;
  c: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, c: '' };
let b: IB = { a: 10, c: true };

function difference<F extends object, S extends object>(a: F, b: S) {
  const neededKeys = Object.keys(a).filter((key) => !Object.keys(b).includes(key)) as (keyof Omit<
    typeof a,
    keyof typeof b
  >)[];
  const res = {} as Omit<typeof a, keyof typeof b>;
  for (let key of neededKeys) {
    res[key] = a[key];
  }
  return res;
}

let v0 = difference(a, b);
console.log(v0);
