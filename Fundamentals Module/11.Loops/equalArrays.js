function solve(arr1, arr2) {
  let sum = 0;
  let result = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      result = false;
      break;
    } else {
      sum += Number(arr1[i]);
    }
  }

  if (result === true) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

solve(
  ["1", "2", "3", "4", "5"],

  ["1", "2", "2", "4", "5"]
);
