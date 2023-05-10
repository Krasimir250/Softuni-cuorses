function solve(input) {
  const familyTax = 50;
  const heavyTax = 80;
  const sportsTax = 100;
  let totalSum = 0;

  const arr = input[0].split(">>");

  arr.forEach((elements) => {
    let [carType, years, distance] = elements.split(" ");
    let sum = 0;

    if (
      carType === "family" ||
      carType === "heavyDuty" ||
      carType === "sports"
    ) {
      switch (carType) {
        case "family":
          let familyTraveled = Math.floor(distance / 3000);
          sum = familyTraveled * 12 + (familyTax - years * 5);

          break;

        case "heavyDuty":
          let heavyTraveled = Math.floor(distance / 9000);
          sum = heavyTraveled * 14 + (heavyTax - years * 8);
          break;

        case "sports":
          let sportsTraveled = Math.floor(distance / 2000);
          sum = sportsTraveled * 18 + (sportsTax - years * 9);
          break;
      }
      totalSum += sum;
      console.log(
        `A ${carType} car will pay ${sum.toFixed(2)} euros in taxes.`
      );
    } else {
      console.log("Invalid car type.");
    }
  });

  console.log(
    `The National Revenue Agency will collect ${totalSum.toFixed(
      2
    )} euros in taxes.`
  );
}

solve(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
