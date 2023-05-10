function solve(num) {
  for (let i = 0; i < 1 + num; i++) {
    for (let k = 0; k < 1 + num; k++) {
      for (let l = 0; l < 1 + num; l++) {
        Console.log(`${i}${k}${l}`);
      }
    }
  }
}

solve(2);
