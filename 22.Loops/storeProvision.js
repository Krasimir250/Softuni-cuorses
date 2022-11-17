function solve(arr1, arr2) {
  const store = {};

  let allProducts = arr1.concat(arr2);

  allProducts.forEach((element, index) => {
    if (index % 2 === 0) {
      let product = element;
      let value = Number(allProducts[index + 1]);

      if (store[product]) {
        store[product] += value;
      } else {
        store[product] = value;
      }
    }
  });

  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
