function heroicInventory(data) {
  const heroes = [];

  for (let i = 0; i < data.length; i++) {
    const heroData = data[i].split(" / ");
    const heroName = heroData[0];
    const heroLevel = Number(heroData[1]);
    const heroItems = heroData[2] ? heroData[2].split(", ") : [];

    const hero = {
      name: heroName,
      level: heroLevel,
      items: heroItems,
    };

    heroes.push(hero);
  }

  return JSON.stringify(heroes);
}

const input = [
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
];

const heroRegister = heroicInventory(input);
console.log(heroRegister);
