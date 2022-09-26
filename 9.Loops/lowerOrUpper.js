function solve(str) {
  let strNumber = str.charCodeAt(0);

  console.log(strNumber >= 97 ? "lower-case" : "upper-case");
}

solve("a");
