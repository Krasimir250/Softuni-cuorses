function sortingNumbers(input) {
  const arr = input.sort((a, b) => Number(a) < Number(b));
  console.log(arr);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
