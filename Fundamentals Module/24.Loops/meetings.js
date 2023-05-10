function solve(arr) {
  let workDays = [];
  arr.forEach((e) => {
    const [day, nameOnWorker] = e.split(" ");

    const busyDay = workDays.find((obj) => obj.day === day);

    if (!busyDay) {
      workDays.push({ day: day, nameOnWorker: nameOnWorker });
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${busyDay.day}!`);
    }
  });

  for (let i = 0; i < workDays.length; i++) {
    console.log(
      `${Object.values(workDays[i])[0]} -> ${Object.values(workDays[i])[1]}`
    );
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
