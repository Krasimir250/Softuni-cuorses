function solve(arr) {
  let [days, sumOnDay, aim] = arr;
  let allSum = 0;

  for (let i = 1; i <= Number(days); i++) {
    let daySum = Number(sumOnDay);
    allSum += daySum;

    if (i % 3 === 0) {
      allSum += daySum * 0.5;
    }

    if (i % 5 === 0) {
      allSum -= allSum * 0.3;
    }
  }

  if (allSum >= Number(aim)) {
    console.log(`Ahoy! ${allSum.toFixed(2)} plunder gained.`);
  } else {
    let end = (allSum / aim) * 100;
    console.log(`Collected only ${end.toFixed(2)}% of the plunder.`);
  }
}

solve(["10", "20", "380"]);
