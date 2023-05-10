function solve(arr) {
  const symbols = arr[2].split("");
  const startIndex = arr[0].charCodeAt(0);
  const endIndex = arr[1].charCodeAt(0);
  let result = 0;

  symbols.forEach((e) => {
    const code = e.charCodeAt(0);
    if (startIndex < endIndex) {
      if (code > startIndex && code < endIndex) {
        result += code;
      }
    } else {
      if (code < startIndex && code > endIndex) {
        result += code;
      }
    }
  });
  console.log(result);
}

solve([".", "@", "dsg12gr5653feee5"]);
