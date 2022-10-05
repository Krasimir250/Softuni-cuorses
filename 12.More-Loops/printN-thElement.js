function solve(arr) {
  const last = Number(arr.pop());
  let response = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (i % last === 0) {
      response.push(num);
    }
  }
  console.log(response.join(" "));
}

solve(["dsa", "asd", "test", "test", "2"]);
