function solve(arr) {
  let theAdresses = [];
  let nameList = [];
  arr.forEach((e) => {
    const [name, adress] = e.split(":");

    if (!nameList.includes(name)) {
      nameList.push(name);
    }

    const newAdress = theAdresses.find((obj) => obj.name === name);

    if (!newAdress) {
      theAdresses.push({ name: name, adress: adress });
    } else {
      newAdress.adress = adress;
    }
  });

  nameList.sort();

  nameList.forEach((name) => {
    const result = theAdresses.find((obj) => obj.name === name);
    console.log(`${result.name} -> ${result.adress}`);
  });
}

solve([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
