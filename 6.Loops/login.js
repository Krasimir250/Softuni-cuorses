function login(name) {
  const userName = name.shift();

  const reverseString = function (word) {
    const splited = word.split("");
    const reversed = splited.reverse().join("");
    return reversed;
  };

  for (let i = 0; i < name.length; i += 1) {
    if (userName == reverseString(name[i])) {
      console.log(`User ${userName} logged in.`);
      break;
    } else {
      if (i == 3) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "ynnus"]);
