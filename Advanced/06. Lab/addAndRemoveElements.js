function addAndRemoveElements(commands) {
  let output = [];
  let num = 1;
  commands.forEach((command) => {
    if (command === "add") {
      output.push(num);
    } else if (command === "remove") {
      output.pop();
    }
    num++;
  });

  if (output.length > 0) {
    output.forEach((e) => {
      console.log(e);
    });
  } else {
    console.log("Empty");
  }
}

addAndRemoveElements(["add", "add", "remove", "add", "add"]);
