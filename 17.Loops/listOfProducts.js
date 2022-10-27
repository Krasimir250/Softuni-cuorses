function solve(arr) {
  const newArr = arr.sort();
  newArr.forEach((e, i) => {
    console.log(`${i + 1}.${e}`);
  });
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
