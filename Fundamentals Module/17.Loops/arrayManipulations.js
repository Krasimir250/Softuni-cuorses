function solve(arr) {
  const numbers = arr.shift().split(" ");

  for (let i = 0; i < arr.length; i++) {
    const command = arr[i].split(" ")[0];
    const argument = arr[i].split(" ")[1];

    switch (command) {
      case "Add":
        numbers.push(argument);
        break;

      case "Remove":
        numbers.forEach((e, i) => {
          if (e === argument) {
            numbers.splice(i, 1);
          }
        });
        break;

      case "RemoveAt":
        numbers.splice(argument, 1);
        break;

      case "Insert":
        const index = arr[i].split(" ")[2];
        numbers.splice(index, 0, argument);
        break;
    }
  }

  console.log(numbers.join(" "));
}

solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
