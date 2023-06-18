function stringManipulator() {
  let internalString = "";

  return {
    append: function (string) {
      internalString += string;
    },
    removeStart: function (n) {
      internalString = internalString.slice(n);
    },
    removeEnd: function (n) {
      internalString = internalString.slice(0, -n);
    },
    print: function () {
      console.log(internalString);
    },
  };
}

// Example usage:
let firstZeroTest = stringManipulator();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
