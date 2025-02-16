//Introduction to JavaScript anonymous functions;

let show = function () {
  console.log("Anonymous function");
};
show();

let showArrow = () => console.log("Anonymous function");
showArrow();

// Using anonymous functions as arguments;
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// Immediately invoked function execution;

(function () {
  console.log("IIFE");
})();

//First, define a function expression:
(function () {
  console.log("Immediately invoke function execution");
});

// Second, call the function by adding the trailing parentheses ():

(function () {
  console.log("Immediately invoke function execution");
})();

let person = {
  firstName: "Devil",
  lastName: "Doe",
};

(function () {
  console.log(`${person.firstName} ${person.lastName}`);
})();
