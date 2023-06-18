function negativePositiveNumbers(arr) {
  let result = [];

  arr.forEach((e) => {
    if (e < 0) {
      result.unshift(e);
    } else {
      result.push(e);
    }
  });

  result.forEach((num) => {
    console.log(num);
  });
}

negativePositiveNumbers([7, -2, 8, 9]);
