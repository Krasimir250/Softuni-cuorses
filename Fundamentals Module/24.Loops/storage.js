function solve(arr) {
  const store = new Map();

  arr.forEach((e) => {
    const [product, value] = e.split(" ");

    if (store.has(product)) {
      const val = Number(store.get(product)) + Number(value);
      store.set(product, val);
    } else {
      store.set(product, value);
    }
  });

  store.forEach((value, key) => console.log(`${key} -> ${value}`));
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
