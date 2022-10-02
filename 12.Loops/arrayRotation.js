function solve(arr, rotations) {
  const result = [...arr];
  for (let index = 0; index < rotations; index++) {
    const element = result.shift();
    result.push(element);
  }
  console.log(result.join(" "));
}

solve([2, 4, 15, 31], 5);
