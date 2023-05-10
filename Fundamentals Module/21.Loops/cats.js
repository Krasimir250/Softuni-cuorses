function solve(parametars) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;

      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  parametars.forEach((e) => {
    let [name, age] = e.split(" ");
    new Cat(name, age);
  });
}

solve(["Mellow 2", "Tom 5"]);
