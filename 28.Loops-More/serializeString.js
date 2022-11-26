function solve(arr) {
  const result = [];
  const str = arr[0].split("");
  str.forEach((e, i) => {
    if (!result.find((obj) => obj.name === e)) {
      result.push({ name: e, value: [i] });
    } else {
      const thisObj = result.find((obj) => obj.name === e);
      thisObj.value.push(i);
    }
  });

  result.forEach((obj) => {
    console.log(`${obj.name}:${obj.value.join("/")}`);
  });
}

solve(["abababa"]);
