const Person = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};
Person.prototype.say = function () {
  console.log(`${this.name} ${this.language}`);
};

const Ork = function (name, language, weapon) {
  this.name = name;
  this.language = language;
  this.weapon = weapon;
};

Ork.prototype = Person.prototype;

Ork.prototype.hit = function () {
  console.log('Удар совершен');
};

const Elf = function (name, language) {
  this.race = 'Elf';
  this.name = name;
  this.language = language;
};

Elf.prototype = Person.prototype;
Elf.prototype.spell = function () {
  console.log('Заклинание прочитано');
};
Elf.prototype.createSpell = function () {
  console.log('Заклинание создано');
};

const ork1 = new Ork('orky', 'orkskiy', 'topor');
ork1.say();
ork1.hit();

const elf1 = new Elf('elfy', 'elfskiy');
elf1.say();
elf1.spell();
elf1.createSpell();
