function solve(product, value) {
  switch (product) {
    case "coffee":
      console.log((1.5 * value).toFixed(2));
      break;

    case "water":
      console.log((1 * value).toFixed(2));
      break;

    case "coke":
      console.log((1.4 * value).toFixed(2));
      break;

    case "snacks":
      console.log((2 * value).toFixed(2));
      break;

    default:
      break;
  }
}

solve("water", 5);
