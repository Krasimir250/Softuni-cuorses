function createPersonArray() {
  const persons = [
    new PersonalRecord("Anna", "Simpson", 22, "anna@yahoo.com"),
    new PersonalRecord("SoftUni"),
    new PersonalRecord("Stephan", "Johnson", 25),
    new PersonalRecord("Gabriel", "Peterson", 24, "g.p@gmail.com"),
  ];

  return persons;
}

const personsArray = createPersonArray();
console.log(personsArray);
