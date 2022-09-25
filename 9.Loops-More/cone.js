function solve(r, h) {
  console.log(`volume = ${((1 / 3) * Math.PI * r * r * h).toFixed(4)}`);
  console.log(
    `area = ${(
      Math.PI * r * Math.sqrt(r * r + h * h) +
      Math.PI * r * r
    ).toFixed(4)}`
  );
}

solve(3, 5);
