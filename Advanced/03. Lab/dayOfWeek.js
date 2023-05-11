function dayOfWeek(n) {
  const days = [
    "Invalid Day!",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (n >= 1 && n <= 7) {
    console.log(days[n]);
  } else {
    console.log(days[0]);
  }
}

dayOfWeek("Monday");
