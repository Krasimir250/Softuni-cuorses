function solve(arr) {
  arr.forEach((num) => {
    console.log(num.toString() === num.toString().split("").reverse().join(""));
  });
}

solve([123, 323, 421, 121]);
