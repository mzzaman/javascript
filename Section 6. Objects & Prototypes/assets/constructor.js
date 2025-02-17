// JavaScript Constructor Function

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create instance of Person;
// let person = new Person("Devil", "Doe");

// console.log(person);
// let student = new Person("md", "Moniruzzaman");
// console.log(student);

// let teacher = new Person("Doe", "Devil");
// console.log(teacher);

// Adding methods to Javascript Constructor Functions;

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// let devil = new Student("Devil", "Doe");
// console.log(devil.getFullName());

// Calling a constructor function without the new keyword

function Teacher(firstName, lastName) {
  if (!new.target) {
    throw new Error("Cannot be called without the new keyword");
  }
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// let teacher = Teacher("Devil", "Doe");
// console.log(teacher.getFullName()); Error: Cannot be called without the new keyword;

let teacher = new Teacher("Devil", "Doe");
console.log(teacher.getFullName());
