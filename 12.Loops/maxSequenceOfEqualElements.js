function solve(arr) {
  let equal = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr.length; a++) {
      if (arr[i] === arr[i + 1]) {
        equal++;
      }
    }
  }
}
