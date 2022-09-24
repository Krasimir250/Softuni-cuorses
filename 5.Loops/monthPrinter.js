function printer(num) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (num > 12 || num < 1) {
    console.log("Error!");
  } else {
    console.log(month[num - 1]);
  }
}

printer(5);
