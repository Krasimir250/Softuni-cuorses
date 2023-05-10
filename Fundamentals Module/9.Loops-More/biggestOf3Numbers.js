function solve(num1, num2, num3) {
  const array = [num1, num2, num3];
  array.sort(function compareFn(a, b) {
    return b - a;
  });
  console.log(array[0]);
}

solve(3, 6, 2);
