function solve(num1, num2, str) {
  switch (str) {
    case "add":
      console.log(num1 + num2);
      break;

    case "subtract":
      console.log(num1 - num2);
      break;

    case "multiply":
      console.log(num1 * num2);
      break;

    case "divide":
      console.log(num1 / num2);
      break;
    default:
      console.log("Error!");
      break;
  }
}

solve(
  5,

  5,

  "multiply"
);
