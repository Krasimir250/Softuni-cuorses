function solve(arr) {
  class Personal {
    constructor(name, personalNumber) {
      this.name = name;
      this.num = personalNumber;

      console.log(`Name: ${this.name} -- Personal Number: ${this.num}`);
    }
  }

  arr.forEach((e) => {
    let name = e;
    let num = name.length;

    new Personal(name, num);
  });
}

solve([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
