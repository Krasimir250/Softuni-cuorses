function solve(arr) {
  const array = arr.split(" ");
  const sum = array.reduce((a, b) => Number(a) + Number(b));
  const averageValue = sum / array.length;
  const sortedArr = array.filter((num) => Number(num) > averageValue);

  sortedArr.sort((a, b) => b - a);

  if (sortedArr.length > 5) {
    console.log(sortedArr.splice(0, 5).join(" "));
  } else {
    console.log(sortedArr.join(" "));
  }
}

solve("10 20 30 40 50");
