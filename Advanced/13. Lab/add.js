function createAdder(initialNumber) {
  let result = initialNumber;

  return function (numberToAdd) {
    return result + numberToAdd;
  };
}

// Example usage:
let add5 = createAdder(5);
console.log(add5(2));
console.log(add5(3));
