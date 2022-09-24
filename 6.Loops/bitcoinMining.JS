function slove(array) {
  let sum = 0;
  let dayPurchasedFirst;
  let bitcoins = 0;

  const priceGold = 67.51;
  const priceBitcoin = 11949.16;

  for (let index = 1; index <= array.length; index++) {
    const goldMined = Number(array[index - 1]);
    const money = goldMined * priceGold;

    if (index % 3 === 0) {
      sum += money * 0.7;
    } else {
      sum += money;
    }

    if (sum >= priceBitcoin) {
      const bitcoinsToAdd = Math.floor(sum / priceBitcoin);
      bitcoins += bitcoinsToAdd;
      sum -= bitcoinsToAdd * priceBitcoin;
      if (!dayPurchasedFirst) {
        dayPurchasedFirst = index;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (dayPurchasedFirst)
    console.log(`Day of the first purchased bitcoin: ${dayPurchasedFirst}`);
  console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

slove([3124.15, 504.212, 2511.124]);
