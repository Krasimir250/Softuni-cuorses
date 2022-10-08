function solve(num) {
  let oddSum = 0;
  let evenSum = 0;

  const arr = num.toString().split("");

  arr.forEach((str) => {
    if (Number(str) % 2 === 0) {
      evenSum += Number(str);
    } else {
      oddSum += Number(str);
    }
  });
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
