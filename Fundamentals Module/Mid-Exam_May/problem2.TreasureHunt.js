function solve(arr) {
  let prize = 0;
  let numsForPrize = 0;
  let resultArr = [];
  let chest = arr.shift().split("|");
  arr.pop();

  arr.forEach((element) => {
    let newArr = element.split(" ");
    let command = newArr.shift();

    switch (command) {
      case "Loot":
        newArr.forEach((e) => {
          if (!chest.includes(e)) {
            chest.unshift(e);
          }
        });
        break;

      case "Drop":
        let index = newArr[0];

        if (index > 0 && index < chest.length - 1) {
          let item = chest.splice(index, 1);
          chest.push(item[0]);
        }
        break;

      case "Steal":
        let count = newArr[0];

        if (count < chest.length) {
          let i = chest.length - count;

          resultArr.push(chest.splice(i, count).join(", "));
        } else if (count > 0) {
          resultArr = chest;
          chest = [];
        }
        break;

      default:
        break;
    }
  });

  chest.forEach((e) => {
    let text = e.split("");
    numsForPrize += text.length;
  });

  prize = numsForPrize / chest.length;

  console.log(resultArr.join(", "));

  if (chest.length === 0) {
    console.log("Failed treasure hunt.");
  } else {
    console.log(`Average treasure gain: ${prize.toFixed(2)} pirate credits.`);
  }
}

solve([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
