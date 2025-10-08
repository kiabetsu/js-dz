class User {
  @allowFunc()
  age: number = 30;
}

function allowFunc() {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function () {
        return this[`__${propertyKey}`];
      },
      set: function (newAge: number) {
        if (newAge > 0) {
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
