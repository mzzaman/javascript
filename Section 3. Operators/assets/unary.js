// Unary plus (+)

let x = 10;
let y = +x;

console.log(y); // 10

let s = "10";
console.log(+s); // 10

let f = false,
  t = true;

console.log(+f); // 0
console.log(+t); // 1

let person = {
  name: "John",
  toString: function () {
    return "25";
  },
};

console.log(+person);

let person2 = {
  name: "John",
  toString: function () {
    return "25";
  },
  valueOf: function () {
    return "30";
  },
};

console.log(+person2);

// Unary minus (-)

let a = 10;
let b = -a;

console.log(a); // -10

let age = 25;
++age;

console.log(age); // 26

let age = 25;
age = age + 1;
console.log(age); // 26

let weight = 90;
weight = ++weight + 5;

console.log(weight); // 96

// Decrement operator (–)

let weight = 90;
--weight;

console.log(weight); // 89

let weight = 90;
weight = weight - 1;

console.log(weight); // 89

let weight = 90;
weight = --weight + 5;

console.log(weight); // 94

let weight = 90;
let newWeight = weight++ + 5;

console.log(newWeight); // 95
console.log(weight); // 91
