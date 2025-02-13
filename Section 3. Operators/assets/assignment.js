let a = b;

let counter = 0;

counter = counter + 1;

counter += 1;

let x = 10;
x += 1;
console.log(x); // 11

let x = 10;
x -= 1;
console.log(x); // 9

let x = 10;
x *= 10;
console.log(x); // 100

let x = 10;
x /= 2;
console.log(x); // 5

let x = 5;
x = x % 2;

console.log(x);

let a = 10,
  b = 20,
  c = 30;
a = b = c; // all variables are 30

let a = 10,
  b = 20,
  c = 30;

b = c; // b is 30
a = b; // a is also 30
