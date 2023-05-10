function solve(arr) {
  const targets = arr
    .shift()
    .split(" ")
    .map((e) => Number(e));

  arr.forEach((e) => {
    const [command, index, value] = e.split(" ");

    switch (command) {
      case "Shoot":
        if (targets[index]) {
          targets[index] -= Number(value);
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;

      case "Add":
        if (targets[index]) {
          targets.splice(index, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;

      case "Strike":
        let startIndex = index - value;
        let endIndex = Number(index) + Number(value);
        let elementsToRemove = 1 + value * 2;

        if (targets[startIndex] && targets[endIndex]) {
          targets.splice(startIndex, elementsToRemove);
        } else {
          console.log("Strike missed!");
        }
        break;

      case "End":
        console.log(targets.join("|"));
        break;
    }
  });
}

solve([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
