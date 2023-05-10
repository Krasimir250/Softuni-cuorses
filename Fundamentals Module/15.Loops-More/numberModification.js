function solve(num) {
  let arr = num.toString().split("");
  let sumFromNums = 0;
  let stop = true;
  let result = 0;
  let tupotoCHislo = arr.length;

  for (let a = 0; a < arr.length; a++) {
    sumFromNums += Number(arr[a]);
  }

  while (stop) {
    for (let i = 0; i < arr.length; i++) {
      result = Number(sumFromNums) / Number(tupotoCHislo);

      if (result >= 5) {
        stop = false;
      } else if (result < 5) {
        sumFromNums += 9;
        arr.push("9");
        tupotoCHislo++;
      }
    }
  }
  console.log(arr.join(""));
}

solve(101);
