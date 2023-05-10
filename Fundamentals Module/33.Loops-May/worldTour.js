function solve(arr) {
  const stopLocations = arr.shift();
  const stopCommand = arr.pop();

  arr.forEach((str) => {
    const [command, index, value] = str.split(":");
    const length = stopLocations.length - 1;

    console.log(length);
    const strArr = [...stopLocations];
    switch (command) {
      case "Add Stop":
        if (index <= length) {
          strArr[index] = value;
          strArr.join("");
        }
        break;

      case "Remove Stop":
        const endIndex = value;
        if (endIndex <= length) {
          strArr.splice(index, endIndex - index);
          strArr.join("");
        }
        break;

      case "Switch":
        const oldLocation = index;
        const newLocation = value;
        console.log(strArr.join(""));
        // if (stopLocations.indexOf(oldLocation)) {
        //   stopLocations.splice(index, endIndex - index);
        // }
        break;

      default:
        break;
    }
  });
}

solve([
  "Hawai::Cyprys-Greece",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Hawai:Bulgaria",

  "Travel",
]);
