function solve(arr) {
  let allBooks = [];

  arr.forEach((e) => {
    const [name, num] = e.split(" ");

    const existingBook = allBooks.find((obj) => obj.name === name);

    existingBook
      ? (existingBook.num = num)
      : allBooks.push({ name: name, num: num });
  });

  for (let i = 0; i < allBooks.length; i++) {
    console.log(
      `${Object.values(allBooks[i])[0]} -> ${Object.values(allBooks[i])[1]}`
    );
  }
}

solve([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
