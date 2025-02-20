// Introduction to JavaScript new.target Meta property;

// Introduction to JavaScript new.target;

// JavaScript new.target in functions;

function Person(name) {
  this.name = name;
}

let devil = new Person("Devil");
console.log(devil.name); // Devil;
Person("Doe");
console.log(window.name); // Doe;

function Person2(name) {
  if (!new.target) {
    throw new Error("Must use new operator with Person");
  }
  this.name = name;
}

// JavaScript new.target in constructors;

class Teacher {
  constructor(name) {
    this.name = name;
    console.log(new.target);
  }
}

class Student extends Teacher {
  constructor(name, className) {
    super(name);
    this.className = className;
  }
}

let john = new Teacher("Devil Doe"); // Teacher;
console.log(john);

let devilDoe = new Student("John Doe", "Xii");
console.log(devilDoe); // Student;
