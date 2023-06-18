function townPopulation(arr) {
  const towns = {};

  arr.forEach((townInfo) => {
    const [town, population] = townInfo.split(" <-> ");
    if (towns[town]) {
      towns[town] += Number(population);
    } else {
      towns[town] = Number(population);
    }
  });

  Object.keys(towns).forEach((t) => {
    console.log(`${t} : ${towns[t]}`);
  });
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
