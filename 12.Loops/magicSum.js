function solve(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[i] + arr[y] === num) {
        console.log(`${arr[i]} ${arr[y]}`);
      }
    }
  }
}

solve(
  [14, 20, 60, 13, 7, 19, 8],

  27
);
