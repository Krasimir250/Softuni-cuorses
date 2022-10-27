function solve(arr) {
  const allMembers = [];

  arr.forEach((str) => {
    const name = str.split(" ")[0];

    if (str.includes("not")) {
      if (allMembers.includes(name)) {
        const index = allMembers.indexOf(name);
        allMembers.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (!allMembers.includes(name)) {
        allMembers.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    }
  });

  console.log(allMembers.join("\n"));
}

solve([
  "Allie is going!",

  "George is going!",

  "John is not going!",

  "George is not going!",
]);
