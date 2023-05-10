function slove(time) {
  let value = 1;
  let all = 0;

  for (let a = 0; a < time; a++) {
    console.log(value);
    all += value;
    value += 2;
  }
  console.log(`Sum: ${all}`);
}

slove(5);
