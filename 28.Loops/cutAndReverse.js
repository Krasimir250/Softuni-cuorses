function solve(str) {
  const text1 = str
    .split("")
    .splice(str.length / 2)
    .reverse()
    .join("");

  const text2 = str
    .split("")
    .splice(0, str.length / 2)
    .reverse()
    .join("");

  console.log(text2);
  console.log(text1);
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
