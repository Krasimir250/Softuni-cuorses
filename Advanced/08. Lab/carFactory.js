function carFactory(requirements) {
  let engine;
  if (requirements.power <= 90) {
    engine = { power: 90, volume: 1800 };
  } else if (requirements.power <= 120) {
    engine = { power: 120, volume: 2400 };
  } else {
    engine = { power: 200, volume: 3500 };
  }

  const carriage = {
    type: requirements.carriage,
    color: requirements.color,
  };

  const wheelSize =
    Math.floor(requirements.wheelsize) % 2 === 0
      ? Math.floor(requirements.wheelsize) - 1
      : Math.floor(requirements.wheelsize);

  const wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

  const car = {
    model: requirements.model,
    engine: engine,
    carriage: carriage,
    wheels: wheels,
  };

  return car;
}

const requirements = {
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
};

const assembledCar = carFactory(requirements);
console.log(assembledCar);
