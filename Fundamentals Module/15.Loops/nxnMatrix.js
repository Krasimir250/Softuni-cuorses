function solve(num) {
  for (let i = 0; i < num; i++) {
    const arr = Array(num).fill(num.toString());
    console.log(arr.join(" "));
  }
}

solve(10);
