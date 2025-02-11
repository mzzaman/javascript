// Indentation

let formatted = true;

if (formatted) {
  console.log("The code is easy to read");
}

let statement = "Welcome To Javascript";
console.log(statement);

if (window.localStorage) {
  console.log("LocalStorage is Supported");
}

// Variable
let message; // undefine
// console.log(age); // ReferenceError
message = "Hello World";
console.log(message);

// DataType
let counter = 120; // counter is Number;
console.log(typeof counter);

counter = "foo"; // counter is String;
console.log(typeof counter);

counter = false; // counter is boolean;
console.log(typeof counter);

let str = "Javascript";
str = str + " String";
console.log(str);

// Number
let num = 071;
console.log(num);
let num2 = 080;
console.log(num2);

// boolean

let completed = true;
let running = false;

let error = "An error occurred";
let hasError = Boolean(error);
console.log(hasError);

if (error) {
  console.log(error);
}

// String

let str1 = "Hi";
let greeting = "Hello";

// template literals

let name = `Moniruzzaman`;
let sayName = `Hi, I'm ${name}`;
console.log(sayName);
console.log(sayName.length); // string length;
console.log(name[0]); // accessing character;

let className = "btn ";
className += "btn-primary ";
className += "none";
console.log(className);

let status = true;
let statusString = status.toString();
let statusString2 = String(status);
console.log(statusString, statusString2);
let back = Boolean(statusString);
console.log(back);

// Object;

let empty = {};
console.log(typeof empty);

let person = {
  name: "Moniruzzaman",
  age: 30,
  job: false,
};

let introduce = `Hello, My Name is ${person.name}, and I am ${person.age} years old, My Job Status are ${person.job}.`;
console.log(introduce);

let hasPerson = person;
console.log(hasPerson === person);

// Array;

let names = []; //creating array;
let friendsName = Array(); // creating array ;
console.log(typeof names, typeof friendsName);

let colors = ["red", "blue", "green"];
let anotherColors = Array("white", "black", "orange");
console.log(colors[1], anotherColors[2]);

console.log(colors.length, anotherColors.length);

// Adding an element to of an array;
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.push("Red Sea");
console.log(seas);

// Adding an element to the beginning of an array;
seas.unshift("White Sea");
console.log(seas);

// Removing an element from the end of an array;
let removeLast = seas.pop();
console.log(removeLast);
console.log(seas);

// Removing an element from the beginning of an array;

let removeFirst = seas.shift();
console.log(removeFirst);
console.log(seas);

// Finding an index of an element in the array;
let northSeaFind = seas.indexOf("North Sea");
console.log(northSeaFind);

// Check if a value is an array;

let seaIsArray = Array.isArray(seas);
console.log(seaIsArray);
