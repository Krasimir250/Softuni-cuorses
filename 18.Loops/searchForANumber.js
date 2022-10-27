function solve(arr, arr2) {
  const [num, num2, number] = arr2;
  const numsArr = arr.slice(0, num);
  numsArr.splice(0, num2);
  const count = numsArr.filter((numb) => numb === number).length;

  console.log(`Number ${number} occurs ${count} times.`);
}

solve(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);
