function solve(n, b) {
  const binary = n.toString(2);
  console.log(binary.split("").filter((num) => num == b).length);
}

solve(15, 1);
