function slove(num) {
  let divisible = 0;

  if (num % 2 == 0) {
    divisible = 2;
  }

  if (num % 3 == 0) {
    divisible = 3;
  }

  if (num % 6 == 0) {
    divisible = 6;
  }

  if (num % 7 == 0) {
    divisible = 7;
  }

  if (num % 10 == 0) {
    divisible = 10;
  }

  if (divisible == 0) {
    console.log("Not divisible");
  } else {
    console.log(`The number is divisible by ${divisible}`);
  }
}

slove(1643);
