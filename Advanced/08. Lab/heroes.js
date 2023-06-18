function heroes() {
  return {
    fighter: function (name) {
      const fighter = {
        name: name,
        health: 100,
        stamina: 100,
        fight: function () {
          this.stamina--;
          console.log(`${this.name} slashes at the foe!`);
        },
      };
      return fighter;
    },
    mage: function (name) {
      const mage = {
        name: name,
        health: 100,
        mana: 100,
        cast: function (spell) {
          this.mana--;
          console.log(`${this.name} cast ${spell}`);
        },
      };
      return mage;
    },
  };
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
