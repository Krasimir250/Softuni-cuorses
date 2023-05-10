function solve(arr) {
  let words = [];

  arr.forEach((e) => {
    if (!words.find((obj) => obj.word === e)) {
      words.push({ word: e, value: 1 });
    } else {
      const workWord = words.find((obj) => obj.word === e);

      if (workWord) workWord.value++;
    }
  });

  words.sort((a, b) => b.value - a.value);

  words.forEach((obj) => {
    console.log(`${obj.word} -> ${obj.value} times`);
  });
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
