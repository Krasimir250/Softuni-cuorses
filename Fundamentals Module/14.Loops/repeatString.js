function solve(str, num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(str);
  }
  console.log(result.join(""));
}

solve("abc", 3);
