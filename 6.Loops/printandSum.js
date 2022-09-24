function slove(num1, num2) {
  let value = 0;
  let nums = [];
  for (let a = num1; a <= num2; a++) {
    nums.push(a);
    value += a;
  }
  console.log(nums.join(" "));
  console.log(`Sum: ${value}`);
}

slove(5, 10);
