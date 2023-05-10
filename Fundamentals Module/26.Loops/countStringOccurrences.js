function solve(arr) {
  const [text, word] = arr;
  let num = 0;

  text.split(" ").forEach((e) => {
    if (e === word) {
      num++;
    }
  });
  console.log(num);
}

solve(["This is a word and it also is a sentence", "is"]);
