function lowestPricesInCities(data) {
  const products = {};

  for (let i = 0; i < data.length; i++) {
    const [town, product, price] = data[i].split(" | ");

    if (!products.hasOwnProperty(product)) {
      products[product] = { price: Number(price), town: town };
    } else {
      if (Number(price) < products[product].price) {
        products[product] = { price: Number(price), town: town };
      }
    }
  }

  const output = [];
  for (const product in products) {
    const { price, town } = products[product];
    output.push(`${product} -> ${price} (${town})`);
  }

  return output.join("\n");
}

const input = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];

const lowestPrices = lowestPricesInCities(input);
console.log(lowestPrices);
