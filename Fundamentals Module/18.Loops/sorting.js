function solve(arr) {
  const result = [];
  const workingArray = arr.sort((a, b) => a - b);

  while (workingArray.length > 0) {
    result.push(workingArray.pop());
    result.push(workingArray.shift());
  }

  console.log(result.join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
