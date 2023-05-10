function solve(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sum += Number(arr[i]);
    }
  }
  console.log(sum);
}

solve(["1", "2", "3", "4", "5", "6"]);
