function TimeToWalk(arg1, arg2, arg3) {
  let stepsNumber = Number(arg1);
  let stepsMetersHr = Number(arg2);
  let studentSpeed = Number(arg3);

  let distanceMeters = stepsNumber * stepsMetersHr;
  let speedMetersSec = studentSpeed / 3.6;
  let time = distanceMeters / speedMetersSec;
  let rest = Math.floor(distanceMeters / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  if (timeHr < 10) {
    console.log(timeHr + "0:" + (timeMin + rest) + ":" + timeSec);
  } else {
    console.log(timeHr + ":" + (timeMin + rest) + ":" + timeSec);
  }
}

TimeToWalk(4000, 0.6, 5);
