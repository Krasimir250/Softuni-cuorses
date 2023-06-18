function objectModifier(commands) {
  const objects = {};

  function createObject(name, parentName = null) {
    if (parentName) {
      const parentObject = objects[parentName];
      objects[name] = Object.create(parentObject);
    } else {
      objects[name] = {};
    }
  }

  function setObjectProperty(name, key, value) {
    const object = objects[name];
    object[key] = value;
  }

  function printObject(name) {
    const object = objects[name];
    const properties = [];

    // Collect own properties
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        properties.push(`${key}:${object[key]}`);
      }
    }

    // Collect inherited properties
    let parentObject = Object.getPrototypeOf(object);
    while (parentObject !== null) {
      for (let key in parentObject) {
        if (parentObject.hasOwnProperty(key)) {
          properties.push(`${key}:${parentObject[key]}`);
        }
      }
      parentObject = Object.getPrototypeOf(parentObject);
    }

    console.log(properties.join(","));
  }

  commands.forEach((command) => {
    const [action, ...params] = command.split(" ");
    if (action === "create") {
      const [name, , parentName] = params;
      createObject(name, parentName);
    } else if (action === "set") {
      const [name, key, value] = params;
      setObjectProperty(name, key, value);
    } else if (action === "print") {
      const [name] = params;
      printObject(name);
    }
  });
}

// Example usage:
const commands = [
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
];
objectModifier(commands);
// Output:
// color:red
// color:red,model:new
