function solve(arr) {
  const k = arr.shift();
  const arrFirst = arr.slice(0, k);
  const arrSecond = arr.slice(arr.length - k, arr.length);

  console.log(arrFirst.join(" "));
  console.log(arrSecond.join(" "));
}

solve([
  2,

  7, 8, 9,
]);
