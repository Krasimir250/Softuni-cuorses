function subtract() {
  const num1 = document.getElementById("firstNumber");
  const num2 = document.getElementById("secondNumber");
  const div = document.getElementById("result");

  const sum = num1.value - num2.value;
  console.log(sum);
  div.textContent = sum;
}
