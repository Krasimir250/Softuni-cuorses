(function () {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }
    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (n < 4) {
      return ".".repeat(n);
    }

    const spaceIndex = this.lastIndexOf(" ", n - 3);
    if (spaceIndex !== -1) {
      return this.slice(0, spaceIndex) + "...";
    }

    return this.slice(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    let result = string;
    for (let i = 0; i < params.length; i++) {
      result = result.replace(new RegExp(`\\{${i}\\}`, "g"), params[i]);
    }
    return result;
  };
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");

console.log(str); // Output: "jumps dog {1}"
