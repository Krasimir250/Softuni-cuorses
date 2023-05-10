function solve(arr) {
  let parking = [];

  arr.forEach((element) => {
    const [direction, carNumber] = element.split(", ");

    switch (direction) {
      case "IN":
        const car = parking.find((obj) => obj.carNumber === carNumber);
        if (!car) parking.push({ carNumber, direction });
        break;

      case "OUT":
        const carIndex = parking.findIndex(
          (obj) => obj.carNumber === carNumber
        );
        if (carIndex > -1) parking.splice(carIndex, 1);
        break;
    }
  });

  if (parking.length) {
    parking.sort((a, b) => a.carNumber.localeCompare(b.carNumber));
    parking.forEach((car) => {
      console.log(car.carNumber);
    });
  } else {
    console.log("Parking Lot is Empty");
  }
}

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
