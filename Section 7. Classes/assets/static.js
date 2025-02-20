// JavaScript Static Methods;

// Introduction to the JavaScript static methods;

// Constructor Function in Object;
function Person(name) {
  this.name = name;
}

// Instance Method (available on object instances)
Person.prototype.getName = function () {
  return this.name;
};

// Static Method (belongs to Person itself, not instances)
Person.createAnonymous = function (gender) {
  let name = gender === "male" ? "Devil Doe" : "Jane Doe";
  return new Person(name);
};

let devilStatic = Person.createAnonymous("male");
console.log(devilStatic);

// JavaScript static methods in ES6;

class Teacher {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static createAnonymous(gender) {
    let name = gender === "male" ? "Devil Doe" : "Jane Doe";
    return new Teacher(name);
  }
}

let devilStaticEs6 = Teacher.createAnonymous("male");
console.log(devilStaticEs6); // Devil Doe;

// Calling a static method from the class constructor or an instance method;

class Student {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  getDetails(roleNumber) {
    return `Hello, I'm ${this.name} and I'm a ${this.title}. Good News: ${
      this.callCreatePosition(roleNumber).title
    }`;
  }

  static createPosition(roleNumber) {
    let role =
      roleNumber === 1
        ? "You are the Toper in The Class"
        : `Please confirm Your ${roleNumber}`;
    return new Student(this.name, role);
  }

  // Instance Method calling a Static Method;
  callCreatePosition(roleNumber) {
    return this.constructor.createPosition(roleNumber); // call the static method;
  }
}

let moniruzzaman = new Student("Moniruzzaman", "Programmer");
console.log(moniruzzaman.getDetails(1));
console.log(moniruzzaman.getDetails(2));
