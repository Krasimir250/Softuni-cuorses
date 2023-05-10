function solve(arr) {
  const firstList = arr.shift().split("!");

  arr.forEach((e, i) => {
    const [command, product] = e.split(" ");

    switch (command) {
      case "Urgent":
        if (!firstList.includes(product)) {
          firstList.unshift(product);
        }
        break;

      case "Unnecessary":
        if (firstList.includes(product)) {
          let index = firstList.indexOf(product);
          firstList.splice(index, 1);
        }
        break;

      case "Correct":
        const oldProduct = e.split(" ")[1];
        const newProduct = e.split(" ")[2];
        let fin = firstList.indexOf(oldProduct);

        if (fin >= 0) {
          firstList.splice(fin, 1, newProduct);
        }

        break;

      case "Rearrange":
        if (firstList.includes(product)) {
          let inx = firstList.indexOf(product);
          firstList.splice(inx, 1);
          firstList.push(product);
        }
        break;
    }
  });

  console.log(firstList.join(", "));
}

solve([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",

  "Rearrange Grapes",

  "Correct Tomatoes Potatoes",

  "Go Shopping",
]);
