function solve(str, startIndex, count) {
  const text = str.split("");
  const result = text.splice(startIndex, count);

  console.log(result.join(""));
}

solve("ASentence", 1, 8);
