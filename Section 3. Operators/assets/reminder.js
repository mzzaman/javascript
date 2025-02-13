let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

let remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

let remainder = Infinity % 2;
console.log(remainder); // NaN

let remainder = 10 % 0;
console.log(remainder); // NaN

let remainder = Infinity % Infinity;
console.log(remainder); // NaN

let remainder = 10 % Infinity;
console.log(remainder); // 10

let remainder = 0 % 10;
console.log(remainder); // 0

let remainder = "10" % 3;
console.log(remainder); // 1

let num = 13;
let isOdd = num % 2 == 1;
console.log(isOdd); // true

function isOdd(num) {
  return num % 2;
}
const isOdd = (num) => num % 2;

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log("remainder:", 5 % 3); // 2
console.log("modulo:", mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log("remainder:", -5 % 3); // -2
console.log("modulo:", mod(-5, 3)); // 1
