function townsToJSON(data) {
  const headings = data[0].split("|").map((item) => item.trim());
  const jsonData = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i].split("|").map((item) => item.trim());
    const town = row[0];
    const latitude = Number(row[1]).toFixed(2);
    const longitude = Number(row[2]).toFixed(2);

    const obj = {
      [headings[0]]: town,
      [headings[1]]: Number(latitude),
      [headings[2]]: Number(longitude),
    };

    jsonData.push(obj);
  }

  return JSON.stringify(jsonData);
}

const input = [
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
];

const json = townsToJSON(input);
console.log(json);
