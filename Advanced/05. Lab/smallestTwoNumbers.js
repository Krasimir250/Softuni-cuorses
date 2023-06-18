function smallestTwoNumbers(input) {
  const arr = input.filter((a, b) => a > b);
  console.log(arr);
}

smallestTwoNumbers([30, 15, 50, 5]);
