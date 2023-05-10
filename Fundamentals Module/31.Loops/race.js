function solve(input) {
  const racers = input.shift().split(", ");

  const names = /[A-Za-z]/g;
  const numbers = /[\d]/g;

  let result = {};
  let obj = {
    0: "1st place:",
    1: "2nd place:",
    2: "3rd place:",
  };

  for (let el of input) {
    let currentRacer = el.match(names).join("");
    let matchedDigits = el.match(numbers);
    if (matchedDigits) {
      let distance = matchedDigits.forEach((a, b) => Number(a) + Number(b));

      if (racers.includes(currentRacer)) {
        if (!result.hasOwnProperty(currentRacer)) {
          result[currentRacer] = distance;
        } else {
          result[currentRacer] += distance;
        }
      }
    }
  }

  Object.keys(result)
    .sort((a, b) => result[b] - result[a])
    .slice(0, 3)
    .forEach((el, index) => console.log(`${obj[index]} ${el}`));
}

solve([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
