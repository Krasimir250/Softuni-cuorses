function solve(arr) {
  const result = {};

  arr.forEach((e) => {
    if (e.includes("arrives")) {
      const leader = e.split("arrives")[0].trim();
      result[leader] = [];
    } else if (e.includes("defeated")) {
      const leader = e.split("defeated")[0].trim();
      delete result[leader];
    } else if (e.includes("+")) {
      const [name, count] = e.split(" + ");

      Object.entries(result).forEach(([leader, army]) => {
        const hasArmy = army.find((obj) => obj.name === name);
        if (hasArmy) hasArmy.count += Number(count);
      });
    } else {
      const [leader, army] = e.split(":");
      const [name, count] = army.trim().split(", ");
      if (result[leader]) result[leader].push({ name, count: Number(count) });
    }
  });

  const leaderCounts = {};

  Object.entries(result).forEach(([leader, army]) => {
    if (!leaderCounts[leader]) leaderCounts[leader] = 0;
    if (army)
      leaderCounts[leader] += army.reduce(
        (acc, val) => acc + Number(val.count),
        0
      );
  });

  Object.entries(leaderCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach((el) => {
      const [leader, count] = el;
      console.log(`${leader}: ${count}`);
      result[leader]
        .sort((a, b) => b.count - a.count)
        .forEach((obj) => {
          console.log(`>>> ${obj.name} - ${obj.count}`);
        });
    });
}

solve([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
