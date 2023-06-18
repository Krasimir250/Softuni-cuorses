function extensibleObject() {
  const obj = {
    extend: function (template) {
      for (let prop in template) {
        if (typeof template[prop] === "function") {
          Object.getPrototypeOf(obj)[prop] = template[prop];
        } else {
          obj[prop] = template[prop];
        }
      }
    },
  };

  return obj;
}

const myObj = extensibleObject();

console.log(myObj); // Output: { extend: [Function] }

const template = {
  extensionMethod: function () {
    console.log("Extension method called");
  },
  extensionProperty: "someString",
};

myObj.extend(template);

console.log(myObj); // Output: { extensionProperty: 'someString', extend: [Function] }

myObj.extensionMethod(); // Output: "Extension method called"
