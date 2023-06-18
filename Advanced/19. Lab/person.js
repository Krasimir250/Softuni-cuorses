function createPerson(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  return {
    get firstName() {
      return firstName;
    },
    set firstName(value) {
      firstName = value;
      fullName = `${firstName} ${lastName}`;
    },
    get lastName() {
      return lastName;
    },
    set lastName(value) {
      lastName = value;
      fullName = `${firstName} ${lastName}`;
    },
    get fullName() {
      return fullName;
    },
    set fullName(value) {
      const nameParts = value.split(" ");
      if (nameParts.length === 2) {
        firstName = nameParts[0];
        lastName = nameParts[1];
        fullName = value;
      }
    },
  };
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName);
