function listProcessor(commands) {
  let collection = [];

  const commandProcessor = {
    add: function (string) {
      collection.push(string);
    },
    remove: function (string) {
      collection = collection.filter((item) => item !== string);
    },
    print: function () {
      console.log(collection.join(","));
    },
  };

  commands.forEach((command) => {
    const [action, value] = command.split(" ");
    commandProcessor[action](value);
  });
}

// Example usage:
const commands = [
  "add hello",
  "add again",
  "remove hello",
  "add again",
  "print",
];
listProcessor(commands);
