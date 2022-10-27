function solve(arr) {
  const tip = arr.pop();
  let taxes = 0;
  let sum = 0;
  let result = 0;

  arr.forEach((e) => {
    let price = Number(e);

    if (price < 0) {
      console.log("Invalid price!");
    } else {
      sum += price;
      taxes += price * 0.2;
    }
  });

  result = sum + taxes;

  if (tip === "special") {
    result -= result * 0.1;
  }

  if (sum <= 0) {
    console.log("Invalid order!");
  } else {
    console.log(
      `Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${result.toFixed(2)}$`
    );
  }
}

solve(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
