function solve(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(`${sortedArr[0]} ${sortedArr[1]}`);
}

solve([30, 15, 50, 5]);
