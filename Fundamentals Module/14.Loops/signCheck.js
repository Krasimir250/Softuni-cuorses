function solve(num1, num2, num3) {
  let negativeNums = 0;

  if (num1 < 0) {
    negativeNums++;
  }

  if (num2 < 0) {
    negativeNums++;
  }

  if (num3 < 0) {
    negativeNums++;
  }

  if (negativeNums % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

solve(
  5,

  12,

  -15
);
