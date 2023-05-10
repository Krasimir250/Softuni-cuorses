function slove(num1, num2, num3) {
  const array = [num1, num2, num3];
  array.sort(function compareFn(a, b) {
    return b - a;
  });
  for (let x = 0; x < 3; x++) {
    console.log(array[x]);
  }
}

slove(4, 10, 2);
