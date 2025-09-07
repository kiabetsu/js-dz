class Car {
  #mark;
  #modal;
  #mileage;

  constructor(mark, modal, mileage) {
    this.#mark = mark;
    this.#modal = modal;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }
  set mileage(newMileage) {
    this.#mileage = newMileage;
  }

  info() {
    console.log(`mark: ${this.#mark}, modal: ${this.#modal}, mileage: ${this.#mileage}`);
  }
}

const bmwX5 = new Car('bmw', 'x5', 1000);
bmwX5.info();
bmwX5.setMileage = 1100;
bmwX5.info();
bmwX5.setMileage = 900;
bmwX5.info();
