function solve(arr) {
  const result = [];
  const end = arr.pop();

  arr.forEach((e) => {
    const [letter, indexes] = e.split(":");
    const indexesArr = indexes.split("/");

    indexesArr.forEach((i) => {
      result[i] = letter;
    });
  });
  console.log(result.join(""));
}

solve(["a:0/2/4/6", "b:1/3/5", "end"]);
