function solve(input) {
  input.pop();
  const colection = [];

  input.forEach((element) => {
    const arr = element.split(" ");
    const command = arr[0];
    const heroName = arr[1];
    const existingHero = colection.find((obj) => obj.name === heroName);

    switch (command) {
      case "Enroll":
        if (existingHero) {
          console.log(`${heroName} is already enrolled.`);
        } else {
          colection.push({ name: heroName, spellBook: [] });
        }
        break;

      case "Learn":
        const spellBook = arr[2];

        if (!existingHero) {
          console.log(`${heroName} doesn't exist.`);
          break;
        }

        if (existingHero.spellBook.includes(spellBook)) {
          console.log(`${heroName} has already learnt {SpellName}.`);
          break;
        }

        existingHero.spellBook.push(spellBook);
        break;

      case "Unlearn":
        const spellName = arr[2];

        if (!existingHero) {
          console.log(`${heroName} doesn't exist.`);
          break;
        }

        if (!existingHero.spellBook.includes(spellName)) {
          console.log(`${heroName} doesn't know {SpellName}.`);
          break;
        }

        const index = existingHero.spellBook.indexOf(spellName);
        existingHero.spellBook.splice(index, 1);
        break;
    }
  });

  console.log("Heroes:");
  colection.forEach((obj) => {
    console.log(`== ${obj.name}: ${obj.spellBook.join(", ")}`);
  });
}

solve([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
