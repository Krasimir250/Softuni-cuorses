function listOfNames(names) {
  let index = 1;

  names.sort().map((name) => {
    console.log(`${index}.${name}`);
    index++;
  });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
