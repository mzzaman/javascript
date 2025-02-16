// Javascript Function;

// function functionName(perameters){
// function body
// ....
//}

function say() {
  console.log("Hello");
}
console.log(say());

function square(a) {
  return a ** 2;
}
console.log(square(3));

function add(a, b) {
  return (sum = a + b);
}
console.log(add(2, 3));

function say(message) {
  console.log(message);
}
console.log("Hello Javascript");

// Returning a value;
let result = say("Hello");
console.log("Result: ", result);

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2)); //3
console.log(add(1, 2, 3, 4, 5)); //15

// Function hoisting

showMe();

function showMe() {
  console.log("an hoisting example");
}
