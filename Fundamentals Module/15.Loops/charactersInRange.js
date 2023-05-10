function solve(start, end) {
  let result = [];
  let num1 = start.charCodeAt(0);
  let num2 = end.charCodeAt(0);

  if (num1 > num2) {
    for (let i = num1 - 1; i > num2; i--) {
      result.push(String.fromCharCode(i));
    }
    console.log(result.reverse().join(" "));
  } else {
    for (let i = num1 + 1; i < num2; i++) {
      result.push(String.fromCharCode(i));
    }
    console.log(result.join(" "));
  }
}

solve("C", "#");
