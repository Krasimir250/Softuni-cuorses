function solve(arr) {
  let newArr = [];
  let oldSum = 0;
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr[i] = arr[i] + i;
    } else {
      newArr[i] = arr[i] - i;
    }
    oldSum += arr[i];
    newSum += newArr[i];
  }
  console.log(newArr);
  console.log(oldSum);
  console.log(newSum);
}

solve([5, 15, 23, 56, 35]);
