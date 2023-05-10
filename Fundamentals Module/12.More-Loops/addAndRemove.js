function solve(arr) {
  let response = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      response.push(i + 1);
    } else {
      response.pop();
    }
  }
  if (response.length === 0) {
    console.log("Empty");
  } else {
    console.log(response.join(" "));
  }
}

solve(["add", "add", "remove", "add", "add"]);
