function solve(arr) {
  let maxNumber = 0;
  let result = arr.reduce((acc, item) => {
    if (item >= maxNumber) {
      acc.push(item);
      maxNumber = item;
    }
    return acc;
  }, []);

  console.log(result.join(" "));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
