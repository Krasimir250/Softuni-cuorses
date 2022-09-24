function slove(num1) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const num = Number(num1.toString().slice(-1));

  console.log(numbers[num]);
}

slove(512);
