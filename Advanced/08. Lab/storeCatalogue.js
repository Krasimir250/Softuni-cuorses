function storeCatalogue(data) {
  const catalog = {};

  for (let i = 0; i < data.length; i++) {
    const [productName, productPrice] = data[i].split(" : ");
    const initial = productName[0].toUpperCase();

    if (!catalog.hasOwnProperty(initial)) {
      catalog[initial] = [];
    }

    catalog[initial].push({ name: productName, price: productPrice });
  }

  const sortedKeys = Object.keys(catalog).sort();

  let output = "";
  for (const key of sortedKeys) {
    output += `${key}\n`;
    catalog[key]
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((product) => {
        output += `  ${product.name}: ${product.price}\n`;
      });
  }

  return output.trim();
}

const input = [
  "Apple : 2.30",
  "Banana : 1.50",
  "Apple : 1.25",
  "Banana : 0.50",
  "Carrot : 0.80",
  "Carrot : 0.40",
  "apple : 3.00",
  "banana : 2.50",
  "carrot : 1.20",
];

const catalog = storeCatalogue(input);
console.log(catalog);
