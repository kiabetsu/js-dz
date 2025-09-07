const Person = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};
Person.prototype.say = function () {
  console.log(`${this.name} ${this.language}`);
};

const Ork = function (name, language, weapon) {
  Person.call(this, 'ork', name, language);
  this.weapon = weapon;
};

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function () {
  console.log('Удар совершен');
};
Ork.prototype.spell = function () {
  console.log('Заклинание прочитано');
};
Ork.prototype.createSpell = function () {
  console.log('Заклинание создано');
};

const ork1 = new Ork('orky', 'orkskiy', 'topor');
ork1.say();
ork1.hit();
ork1.spell();
ork1.createSpell();

console.log(Ork);
