function solve(arr) {
  let info = [];

  arr.forEach((e) => {
    const name = e.split(" ")[0];
    const grade = e.split(name)[1].trim().split(" ");

    const newProfile = info.find((obj) => obj.name === name);

    if (!newProfile) {
      info.push({
        name,
        grade,
      });
    } else {
      newProfile.grade = newProfile.grade.concat(grade);
    }
  });

  info.sort((a, b) => a.name.localeCompare(b.name));

  info.forEach((obj) => {
    const sum =
      obj.grade.reduce((a, b) => Number(a) + Number(b)) / obj.grade.length;

    console.log(`${obj.name}: ${sum.toFixed(2)}`);
  });
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
