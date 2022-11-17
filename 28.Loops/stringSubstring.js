function solve(key, text) {
  const words = text.split(" ").map((w) => w.toLowerCase());

  if (words.includes(key.toLowerCase())) {
    console.log(key);
  } else {
    console.log(`${key} not found!`);
  }
}

solve(
  "javascript",

  "JavaScript is the best programming language"
);
