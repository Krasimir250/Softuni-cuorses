function calc() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  let sum = document.getElementById("sum");
  console.log({ num1, num2 });

  sum.value = Number(num1) + Number(num2);
}
