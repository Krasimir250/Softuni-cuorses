function calorieObject(arr) {
  let products = [];
  let calories = [];
  let obj = {};

  for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 1) {
      calories.push(arr[index]);
    } else {
      products.push(arr[index]);
    }
  }

  products.forEach((product, i) => {
    obj[product] = Number(calories[i]);
  });

  console.log(obj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
