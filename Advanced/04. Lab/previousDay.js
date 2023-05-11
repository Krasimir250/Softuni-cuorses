function previousDay(year, month, day) {
  let nextDay = new Date(year, month - 1, day - 1);
  let newYear = nextDay.getFullYear();
  let newMonth = nextDay.getMonth() + 1;
  let newDate = nextDay.getDate();
  console.log(`${newYear}-${newMonth}-${newDate}`);
}

previousDay(2015, 5, 10);
