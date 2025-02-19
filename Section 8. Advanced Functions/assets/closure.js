// JavaScript Closures;

// Introduction to JavaScript closures;

// Lexical scoping

let name = "Devil";
// function greeting() {
//   let message = "Hi";
//   console.log(message + " " + name);
// }

// greeting();

// function greeting() {
//   let message = "Hi";

//   function sayHi() {
//     console.log(message);
//   }

//   sayHi();
// }

// greeting();

// JavaScript closures

function displayMessage() {
  let message = "Hello";
  function sayHello() {
    return message;
  }
  return sayHello();
}

console.log(displayMessage());
console.log("Still can access the message variable");
let show = displayMessage();
// console.log(show);

function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}

let sayHi = greeting("Hi");
// console.log(sayHi("Devil"));

let sayHello = greeting("Hello");
// console.log(sayHello("Devil"));

// JavaScript closures in a loop;
// for (var index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log("after " + index + " second(s):" + index);
//   }, index * 1000);
// }

// 1) Using the IIFE solution;
// for (var index = 1; index <= 3; index++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log("after " + index + " second(s):" + index);
//     }, index * 1000);
//   })(index);
// }

// 2) Using let keyword in ES6
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
