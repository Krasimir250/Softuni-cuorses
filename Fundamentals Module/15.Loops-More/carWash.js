function solve(arr) {
  let value = 0;
  arr.forEach((commands) => {
    switch (commands) {
      case "soap":
        value += 10;
        break;

      case "water":
        value += (20 / 100) * value;
        break;

      case "vacuum cleaner":
        value += (25 / 100) * value;
        break;

      case "mud":
        value -= (10 / 100) * value;
        break;

      default:
        break;
    }
  });

  console.log(`The car is ${value.toFixed(2)}% clean.`);
}

solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
