class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
}

const person = new Person("John Doe", "john.doe@example.com");
console.log(person.name);
console.log(person.email);

const teacher = new Teacher("Jane Smith", "jane.smith@example.com", "Math");
console.log(teacher.name);
console.log(teacher.email);
console.log(teacher.subject);
