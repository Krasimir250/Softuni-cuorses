function solve(str) {
  const arr = str.split(" ");
  const objs = [];

  arr.forEach((e) => {
    if (!objs.find((obj) => obj.word === e.toLowerCase())) {
      objs.push({ word: e.toLowerCase(), value: 1 });
    } else {
      const workObj = objs.find((obj) => obj.word === e.toLowerCase());
      workObj.value++;
    }
  });

  const result = objs.filter((obj) => obj.value % 2 !== 0);
  const strResult = [];

  result.forEach((e) => {
    strResult.push(e.word);
  });

  console.log(strResult.join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
