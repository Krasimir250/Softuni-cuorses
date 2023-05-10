function solve(data) {
  let pattern = new RegExp(
    ">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)"
  );

  let command = data.shift();
  let furniture = [];
  let currMoney = 0;
  let moneyTotal = 0;
  let quantity = 0;

  while (command != "Purchase") {
    let match = pattern.exec(command);

    if (match != null) {
      furniture.push(match.groups["furniture"]);
      currMoney = Number(match.groups["price"]);
      quantity = Number(match.groups["quantity"]);
      moneyTotal += currMoney * quantity;
    }

    command = data.shift();
  }

  console.log("Bought furniture:");
  console.log(furniture.join("\n"));
  console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}

solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
