function fruit(fruit, weight, money) {
  const kgFruit = weight / 1000;
  const haveMoney = (money * kgFruit).toFixed(2);
  console.log(
    `I need $${haveMoney} to buy ${kgFruit.toFixed(2)} kilograms ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);
