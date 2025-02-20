// JavaScript Class Expressions;

// Introduction to JavaScript class expressions;

let Person = class {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
};

let devil = new Person("Devil");
console.log(typeof Person); // function;

// First-class citizen

function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    // Define method
    sayHi() {
      console.log("Hi");
    }
  }
);
greeting.sayHi();

// Singleton;

let app = new (class {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
})("Devil");

app.sayHi();
