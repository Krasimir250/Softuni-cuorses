function sumOfNumbersNM(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  console.log(sum);
}

sumOfNumbersNM("1", "5");
