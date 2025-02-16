// JavaScript Functions are First-Class Citizens

// Functions can be assigned to variables
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice"));

function add(a, b) {
  return a + b;
}
let sum = add;
console.log(sum(10, 20));

// Functions can be passed as arguments to other functions
function sayHello(fn, name) {
  console.log(fn(name));
}

sayHello(greet, "Bob");

function average(a, b, fn) {
  return fn(a, b) / 2;
}

let result = average(10, 20, sum);
console.log(result);

// Functions can be returned from other functions
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHi = createGreeting("Hi");
console.log(sayHi("Charlie"));

function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

people.sort(compareBy("age"));
people.sort(compareBy("age"));
console.table(people);

let products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];

console.log("Products sorted by name:");
products.sort(compareBy("price"));
console.table(products);

products.sort(compareBy("name"));
console.table(products);
