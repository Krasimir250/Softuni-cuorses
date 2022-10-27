function solve(arr) {
  const citys = arr.shift();
  let sum = 0;

  for (let day = 1; day <= citys; day++) {
    let nameCity = arr.shift();
    let income = Number(arr.shift());
    let expenses = Number(arr.shift());

    if (day % 3 === 0 && day % 5 !== 0) {
      expenses += expenses * 0.5;
    }

    if (day % 5 === 0) {
      income -= income * 0.1;
    }

    let daySum = income - expenses;
    sum += daySum;

    console.log(`In ${nameCity} Burger Bus earned ${daySum.toFixed(2)} leva.`);
  }

  console.log(`Burger Bus total profit: ${sum.toFixed(2)} leva.`);
}

solve([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
