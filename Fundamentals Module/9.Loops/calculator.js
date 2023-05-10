function solve(num1, str, num2) {
  switch (str) {
    case "+":
      console.log((num1 + num2).toFixed(2));
      break;

    case "-":
      console.log((num1 - num2).toFixed(2));
      break;

    case "*":
      console.log((num1 * num2).toFixed(2));
      break;

    case "/":
      console.log((num1 / num2).toFixed(2));
      break;
    default:
      console.log("Error!");
      break;
  }
}

solve(
  55,

  "-",

  10
);
