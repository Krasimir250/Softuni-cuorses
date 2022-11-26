function solve(arr) {
  const garage = {};

  arr.forEach((element) => {
    const [numGarage, carInfo] = element.split(" - ");
    const carInfoArr = carInfo.split(", ");
    const car = [];

    carInfoArr.forEach((e) => {
      const [key, value] = e.split(": ");
      car.push({ [key.toString()]: value });
    });

    if (!garage[numGarage]) garage[numGarage] = [];
    garage[numGarage].push(car);
  });

  for (const key in garage) {
    console.log(`Garage № ${key}`);
    const cars = garage[key];

    cars.forEach((car) => {
      let arrInfo = [];

      car.forEach((obj) => {
        let str = "";

        Object.entries(obj).forEach(([key, val]) => {
          str += `${key} - ${val}`;
        });

        arrInfo.push(str);
      });

      console.log(`--- ${arrInfo.join(", ")}`);
    });
  }
}

solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
