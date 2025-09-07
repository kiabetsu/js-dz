const Person = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};
Person.prototype.say = function () {
  console.log(`${this.language} ${this.name}`);
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

const Elf = function (name, language, spells) {
  Person.call(this, 'elf', name, language);
  this.spells = spells;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.spell = function (idOfSpell) {
  console.log(`${this.spells[idOfSpell]} прочитан`);
};
Elf.prototype.createSpell = function (nameOfSpell) {
  this.spells.push(nameOfSpell);
};

const ork1 = new Ork('orky', 'orkskiy', 'topor');
ork1.say();
ork1.hit();

const elf1 = new Elf('elfy', 'elfskiy', []);
elf1.say();
elf1.createSpell('fireball');
elf1.spell(0);
