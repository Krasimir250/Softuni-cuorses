function slove(num) {
  for (let a = 1; a <= num; a++) {
    console.log(Array(a).fill(a).join(" "));
  }
}

slove(16);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
