function solve(arr) {
  let obj = [];
  arr.forEach((e, i) => {
    if (i % 2 === 0) {
      const product = e;
      const value = Number(arr[i + 1]);

      if (!obj.find((obj) => obj.product === product)) {
        obj.push({ product, value });
      } else {
        const thisObj = obj.find((obj) => obj.product === product);
        thisObj.value += value;
      }
    }
  });

  obj.forEach((obj) => console.log(`${obj.product} -> ${obj.value}`));
}

solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
