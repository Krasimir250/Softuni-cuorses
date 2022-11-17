function solve(arr) {
  let allGamers = [];

  arr.forEach((e) => {
    let [name, level, items] = e.split(" / ");

    allGamers.push({ name, level, items });
  });

  allGamers
    .sort((a, b) => a.level - b.level)
    .forEach((obj) => {
      console.log(
        `Hero: ${obj.name}\nlevel => ${obj.level}\nitems => ${obj.items}`
      );
    });
}

solve([
  "Isacc / 24 / Apple, GravityGun",

  "Derek / 45 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
