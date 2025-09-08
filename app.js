class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  say() {
    console.log(`${this.language} ${this.name}`);
  }
}

class Orc extends Character {
  constructor(name, language, weapon) {
    super('orc', name, language);
    this.weapon = weapon;
  }

  strike() {
    console.log('udar nanesen');
  }

  say() {
    console.log('AAAAAAAARRRRRRRRRR!!!');
  }
}

class Elf extends Character {
  constructor(name, language, spell) {
    super('elf', name, language);
    this.spell = spell;
  }

  castSpell() {
    console.log('zaklenanie sozdano');
  }

  say() {
    console.log('ti umresh, zhalkkoe sozdanie');
  }
}

const orc = new Orc('orky', 'orchiy', 'topor');
orc.say();
orc.strike();

const elf = new Elf('elfy', 'elfskiy', 'fireball');
elf.say();
elf.castSpell();
