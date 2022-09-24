function slove(year) {
  if (year % 400 == 0) {
    console.log("yes");
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log("yes");
  } else if (year % 4 == 0 && year % 100 == 0) {
    console.log("no");
  } else {
    console.log("no");
  }
}

slove(2000);
