function slove(num) {
  let a = num.toString().split("");
  let sum = 0;
  for (let x = 0; x < a.length; x++) {
    sum += Number(a[x]);
  }
  console.log(sum);
}

slove(987654);
