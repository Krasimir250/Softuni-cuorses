function solve(a, b, c) {
  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  let result = sum(a, b);
  let log = subtract(result, c);
  console.log(log);
}

solve(23, 6, 10);
