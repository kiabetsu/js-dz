const obj: Record<string, number> = {
  a: 1,
  b: 2,
};

type objType = Record<string, number>;
type resType = Record<number, string>;

function swapKeysAndValues(obj: objType): resType {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

console.log(swapKeysAndValues(obj));
/*
{
  1: 'a',
  2: 'b'
}
*/
