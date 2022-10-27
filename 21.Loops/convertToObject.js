function solve(jsonFile) {
  let obj = JSON.parse(jsonFile);

  for (const key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
