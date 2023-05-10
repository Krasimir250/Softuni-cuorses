function solve(arr) {
  arr.pop();
  let str = arr.shift();

  arr.forEach((element) => {
    const workArr = element.split(" ");
    const command = workArr.shift();
    const strArr = str.split("");
    switch (command) {
      case "Replace":
        const [oldChar, newChar] = workArr;

        str = str.replace(oldChar, newChar);
        console.log(str);
        break;

      case "Make":
        const typeLetter = workArr[0];
        if (typeLetter === "Upper") {
          str = str.toUpperCase();
        } else if (typeLetter === "Lower") {
          str = str.toLowerCase();
        }

        console.log(str);
        break;

      case "Check":
        const searchWord = workArr[0];

        if (str.includes(searchWord)) {
          console.log(`Message contains ${searchWord}`);
        } else {
          console.log(`Message doesn't contain ${searchWord}`);
        }
        break;

      case "Sum":
        const [startIndex, endIndex] = workArr;
        if (str[startIndex] && str[endIndex]) {
          const thisArr = str.split("");
          const word = thisArr.splice(startIndex, endIndex - startIndex + 1);
          let sum = 0;

          word.forEach((e) => {
            sum += e.charCodeAt();
          });

          console.log(sum);
        } else {
          console.log("Invalid indices!");
        }

        break;

      case "Cut":
        const [startIn, endIn] = workArr;
        if (str[startIn] && str[endIn]) {
          str = str.split("");
          str.splice(startIn, endIn - startIn + 1);
          str = str.join("");
          console.log(str);
        } else {
          console.log("Invalid indices!");
        }

        break;
    }
  });
}

solve([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);
