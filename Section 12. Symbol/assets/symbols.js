// Javascript Symbols
let s = Symbol("Hello");
console.log(s.description);

let firstName = Symbol("first name"),
  lastName = Symbol("Last name");

console.log(firstName, lastName);
console.log(typeof firstName);

// Sharing symbols

let citizenID = Symbol.for("ssn");
let ssn = Symbol.for("citizenID");

console.log(ssn === citizenID);

console.log(Symbol.keyFor(citizenID));

let systemID = Symbol("sys");
console.log(Symbol.keyFor(systemID));

// Symbol usages;

// A) Using symbols as unique values

// Define status symbols
let statuses = {
  OPEN: Symbol("Open"),
  IN_PROGRESS: Symbol("In Progress"),
  COMPLETE: Symbol("Completed"),
  HOLD: Symbol("On hold"),
  CANCELED: Symbol("Canceled"),
};

// Define a task Object
let task = {
  name: "Complete Javascript Project",
  status: statuses.OPEN, // Default Status

  // Method to update the task status
  setStatus(newTask) {
    this.status = newTask;
    console.log(`Task Status Updated to: ${this.getStatus()}`);
  },

  // Method to get the status as a readable string;
  getStatus() {
    return Object.keys(statuses).find((key) => statuses[key] === this.status);
  },
};

// complete a task
console.log(`Initial Status: ${task.getStatus()}`); // OPEN
task.setStatus(statuses.COMPLETE); // Updating status to COMPLETED
console.log(`Updated Status: ${task.getStatus()}`); // COMPLETED

// B) Using a symbol as the computed property name of an object;

let status = Symbol("status");
let task2 = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbol",
};
console.log(task2);
console.log(Object.keys(task2)); // description;

console.log(Object.getOwnPropertyNames(task2)); // description;

// console.log(Object.getOwnPropertySymbols(task2));

// Well-known symbols

class Stack {}
console.log([] instanceof Stack); // false;

class Stack2 {
  static [Symbol.hasInstance](obj) {
    return Array.isArray(obj);
  }
}
console.log([] instanceof Stack2); // true;

// Symbol.iterator;
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

const iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); // Object {value:1, done:false}

console.log(iterator.next()); // Object {value:2, done:false}

console.log(iterator.next()); // Object {value:3, done:false}

console.log(iterator.next()); // Object {value:undefined, done:true}

class List {
  constructor() {
    this.elements = [];
  }
  add(element) {
    this.elements.push(element);
    return this;
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let chars = new List();
chars.add("A");
chars.add("B");
chars.add("C");

for (let char of chars) {
  console.log(char);
}

let list = {
  0: "Javascript",
  1: "Symbol",
  length: 2,
};
let message = ["learning"].concat(list);
console.log(message);

let list2 = {
  0: "Javascript",
  1: "Symbol",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};

let message2 = ["Learning"].concat(list2);

console.log(message2);

// Symbol.toPrimitive
function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

Money.prototype[Symbol.toPrimitive] = function (hint) {
  let result;
  switch (hint) {
    case "string":
      result = this.amount + this.currency;
      break;

    case "number":
      result = this.amount;
      break;

    case "default":
      result = this.amount + this.currency;
      break;
  }
  return result;
};

let price = new Money(800, " USD");
console.log("Price is " + price);
console.log(+price + 1);
console.log(String(price));
