function printEveryNthElementFromAnArray(arr, n) {
  let output = [];
  for (let i = 0; i < arr.length; i += n) {
    output.push(arr[i]);
  }
  output.forEach((e) => {
    console.log(e);
  });
}

printEveryNthElementFromAnArray(["5", "20", "31", "4", "20"], 2);
