function slove(str) {
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
  console.log(str.reverse());
}

slove("Krasimir");
