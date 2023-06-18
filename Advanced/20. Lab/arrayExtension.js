(function () {
  Object.defineProperty(Array.prototype, "last", {
    get: function () {
      return this[this.length - 1];
    },
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(Array.prototype, "skip", {
    value: function (n) {
      return this.slice(n);
    },
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(Array.prototype, "take", {
    value: function (n) {
      return this.slice(0, n);
    },
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(Array.prototype, "sum", {
    value: function () {
      return this.reduce((acc, cur) => acc + cur, 0);
    },
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(Array.prototype, "average", {
    value: function () {
      if (this.length === 0) {
        return 0;
      }
      return this.sum() / this.length;
    },
    enumerable: false,
    configurable: false,
  });
})();

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.last);
console.log(numbers.skip(2));
console.log(numbers.take(3));
console.log(numbers.sum());
console.log(numbers.average());

const emptyArray = [];
console.log(emptyArray.sum());
console.log(emptyArray.average());
