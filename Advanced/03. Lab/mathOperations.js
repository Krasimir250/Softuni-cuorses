function mathOperations(num1, num2, operation) {
  const result = () => {
    switch (operation) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        return num1 / num2;

      case "%":
        return num1 % num2;

      case "**":
        return num1 ** num2;

      default:
        break;
    }
  };

  console.log(result());
}

mathOperations(3, 5.5, "*");
