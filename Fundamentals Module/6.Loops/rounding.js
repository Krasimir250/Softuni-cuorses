function slove(num1, num2) {
  if (num1 > num2) {
    console.log(parseFloat(num1.toFixed(num2)));
  } else {
    console.log(parseFloat(num2.toFixed(num1)));
  }
}

slove(10.5, 3);

// True
function rounding(number, precision) {
  if (precision > 15) {
    precision = 15;
  }
  const result = number.toFixed(precision);
  console.log(parseFloat(result));
}
