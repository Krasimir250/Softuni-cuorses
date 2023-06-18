function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
  const figures = JSON.parse(input);

  const results = figures.map((figure) => {
    const x = parseFloat(figure.x);
    const y = parseFloat(figure.y);
    const z = parseFloat(figure.z);

    const areaValue = area.call({ x, y });
    const volumeValue = vol.call({ x, y, z });

    return { area: areaValue, volume: volumeValue };
  });

  return results;
}

solve(
  area,
  vol,
  `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
);
