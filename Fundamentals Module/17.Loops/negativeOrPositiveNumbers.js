function solve(arr) {
  arr.forEach((e, i) => {
    if (Number(e) < 0) {
      const deleteElement = arr.splice(i, 1);
      arr.unshift(deleteElement[0]);
    }
  });

  arr.forEach((a) => {
    console.log(a);
  });
}

solve(["7", "-2", "8", "9"]);
