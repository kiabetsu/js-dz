class User {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}

function allowFunc(check: (a: number) => boolean) {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function () {
        return this[`__${propertyKey}`] ?? 30;
      },
      set: function (newAge: number) {
        if (check(newAge)) {
          this[`__${propertyKey}`] = newAge;
        } else {
          console.log('error');
        }
      },
    });
  };
}

const person = new User();
console.log(person.age); // 30

person.age = 0;
console.log(person.age); // 30

person.age = 20;
console.log(person.age); // 20
