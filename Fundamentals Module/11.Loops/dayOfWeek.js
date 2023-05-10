function solve(num) {
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num > 7 || num < 1) {
    console.log("Invalid day!");
  } else {
    console.log(day[num - 1]);
  }
}

solve(3);
