function solve(str) {
  const words = str.split("");
  let result = "";

  words.forEach((word, i) => {
    if (words[i + 1] !== word) result += word;
  });

  console.log(result);
}

solve("aaaaabbbbbcdddeeeedssaa");
