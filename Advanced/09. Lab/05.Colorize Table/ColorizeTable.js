function colorize() {
  const table = document
    .getElementsByTagName("table")
    .item(0)
    .children[0].getElementsByTagName("tr");

  for (let i = 0; i < table.length; i++) {
    if (i % 2 == 1) {
      table[i].style.backgroundColor = "Teal";
    }
  }
}
