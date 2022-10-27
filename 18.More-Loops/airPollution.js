function solve(arr1, arr2) {
  let numbersArr = arr1.map((str) => str.split(" "));

  arr2.forEach((e) => {
    const [command, value] = e.split(" ");

    switch (command) {
      case "breeze":
        numbersArr[value] = numbersArr[value].map((num) => {
          if (num - 15 < 0) {
            return 0;
          } else {
            return num - 15;
          }
        });
        break;

      case "gale":
        numbersArr = numbersArr.map((arr) => {
          if (arr[value] - 20 < 0) {
            arr[value] = 0;
          } else {
            arr[value] -= 20;
          }
          return arr;
        });
        break;

      case "smog":
        numbersArr = numbersArr.map((arr) => {
          return arr.map((number) => {
            let num = Number(number);
            return (num += Number(value));
          });
        });
        break;
    }
  });

  const result = [];

  numbersArr.forEach((arr, rowIndex) => {
    arr.forEach((num, columnIndex) => {
      if (num >= 50) {
        result.push(`[${rowIndex}-${columnIndex}]`);
      }
    });
  });

  if (result.length) {
    console.log(`Polluted areas: ${result.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}

solve(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
