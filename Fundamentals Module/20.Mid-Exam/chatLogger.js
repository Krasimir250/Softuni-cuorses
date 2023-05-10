function solve(arr) {
  let chat = [];

  arr.forEach((elements) => {
    let workArr = elements.split(" ");
    let command = workArr.shift();

    switch (command) {
      case "Chat":
        let text0 = workArr[0];
        chat.push(text0);
        break;

      case "Delete":
        let text1 = workArr[0];
        if (chat.includes(text1)) {
          let index = chat.indexOf(text1);
          chat.splice(index, 1);
        }
        break;

      case "Edit":
        let [oldText, newText] = workArr;

        if (chat.includes(oldText)) {
          let index = chat.indexOf(oldText);
          chat.splice(index, 1, newText);
        }
        break;

      case "Pin":
        let text2 = workArr[0];
        if (chat.includes(text2)) {
          let index = chat.indexOf(text2);
          chat.splice(index, 1);
          chat.push(text2);
        }
        break;

      case "Spam":
        workArr.forEach((e) => {
          chat.push(e);
        });
        break;

      case "end":
        console.log(chat.join("\n"));
        break;
    }
  });
}

solve([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);
