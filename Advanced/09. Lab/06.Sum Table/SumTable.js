function sumTable() {
  let sum = 0;
  const sumVal = document.getElementById("sum");
  const table = document
    .getElementsByTagName("tbody")
    .item(0)
    .getElementsByTagName("tr");

  for (let i = 1; i < table.length - 1; i++) {
    const td = table[i].children[1].textContent;
    sum += Number(td);
  }

  sumVal.textContent = sum;
}
