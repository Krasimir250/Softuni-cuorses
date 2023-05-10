function slove(num) {
  Array(10)
    .fill()
    .forEach((_, i) => console.log(`${num} X ${i + 1} = ${num * (i + 1)}`));
}

slove(5);
