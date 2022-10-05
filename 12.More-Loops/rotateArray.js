function solve(arr) {
  const rotations = Number(arr.pop());
  const result = [...arr];

  for (let index = 0; index < rotations; index++) {
    const element = result.pop();
    result.unshift(element);
  }
  console.log(result.join(" "));
}

solve(["1", "2", "3", "4", "2"]);
