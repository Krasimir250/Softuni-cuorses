function slove(numPeople, typeGruop, day) {
  let allSum = 0;
  let finishSum = 0;
  switch (typeGruop) {
    case "Students":
      if (day === "Friday") {
        allSum = numPeople * 8.45;
      } else if (day === "Saturday") {
        allSum = numPeople * 9.8;
      } else if (day === "Sunday") {
        allSum = numPeople * 10.46;
      }

      if (numPeople >= 30) {
        finishSum = allSum - (allSum * 15) / 100;
      } else {
        finishSum = allSum;
      }

      break;

    case "Business":
      if (day === "Friday") {
        allSum = numPeople * 10.9;
      } else if (day === "Saturday") {
        allSum = numPeople * 15.6;
      } else if (day === "Sunday") {
        allSum = numPeople * 16;
      }

      if (numPeople >= 100) {
        finishSum = allSum - (allSum / numPeople) * 10;
      } else {
        finishSum = allSum;
      }
      break;

    case "Regular":
      if (day === "Friday") {
        allSum = numPeople * 15;
      } else if (day === "Saturday") {
        allSum = numPeople * 20;
      } else if (day === "Sunday") {
        allSum = numPeople * 22.5;
      }

      if (numPeople >= 10 && numPeople <= 20) {
        finishSum = allSum - (allSum * 5) / 100;
      } else {
        finishSum = allSum;
      }
      break;

    default:
      console.log("Error!");
      break;
  }
  console.log(`Total price: ${finishSum.toFixed(2)}`);
}

slove(
  40,

  "Regular",

  "Saturday"
);
