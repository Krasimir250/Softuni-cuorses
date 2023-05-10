function solve(arr) {
  const result = [];
  const trackerWords = arr.shift().split(" ");

  trackerWords.forEach((word) => {
    if (!result.find((obj) => obj.word === word)) {
      result.push({ word, value: 0 });
    }
  });

  arr.forEach((e) => {
    const obj = result.find((o) => o.word === e);
    if (obj) {
      obj.value++;
    }
  });
  result.sort((a, b) => b.value - a.value);
  result.forEach((obj) => {
    console.log(`${obj.word} - ${obj.value}`);
  });
}

solve([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
