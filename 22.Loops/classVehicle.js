class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = parts;
    this.fuel = fuel;

    this.parts.quality = Number(this.parts.engine) * Number(this.parts.power);
  }

  drive(num) {
    this.fuel -= num;
  }
}

let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle("a", "b", parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality);
