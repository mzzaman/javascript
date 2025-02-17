//Javascript Object Methods

let person = {
  firstName: "Md",
  lastName: "Moniruzzaman",
};

console.log(`${person.firstName} ${person.lastName}`);
person.greeting = function () {
  console.log("Hello");
};

// person.greeting(); // Call Method;

// Object Method shorthand

let student = {
  firstName: "Devil",
  lastName: "Doe",
  greet: function () {
    console.log("Hello Devil Doe");
  },
};

// console.log(student.firstName);
// console.log(student.lastName);
// student.greet();

// ES6 Syntax for Object;
let teacher = {
  firstName: "Devil",
  lastName: "Doe",
  greet() {
    console.log(`Hello World`);
  },

  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

teacher.fullName();
