function theatre(day, age) {
  if (age < 0 || age > 122) {
    console.log("Error!");
  } else {
    if (0 <= age && age <= 18) {
      switch (day) {
        case "Weekday":
          console.log("12$");
          break;

        case "Weekend":
          console.log("15$");
          break;

        case "Holiday":
          console.log("5$");
          break;

        default:
          console.log("Error!");
          break;
      }
    } else if (18 < age && age <= 64) {
      switch (day) {
        case "Weekday":
          console.log("18$");
          break;

        case "Weekend":
          console.log("20$");
          break;

        case "Holiday":
          console.log("12$");
          break;

        default:
          console.log("Error!");
          break;
      }
    } else if (64 < age && age <= 122) {
      switch (day) {
        case "Weekday":
          console.log("12$");
          break;

        case "Weekend":
          console.log("15$");
          break;

        case "Holiday":
          console.log("10$");
          break;

        default:
          console.log("Error!");
          break;
      }
    }
  }
}

theatre("Holiday", -12);
