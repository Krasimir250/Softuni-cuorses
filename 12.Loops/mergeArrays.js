function solve(arr1, arr2) {
  let loby = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      loby.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      loby.push(arr1[i] + arr2[i]);
    }
  }
  console.log(loby.join(" - "));
}

solve(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
