function solve(num, arr) {
  let a = [];
  for (let i = 0; i < num; i++) {
    a[i] = arr[i];
  }
  console.log(a.reverse().join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
