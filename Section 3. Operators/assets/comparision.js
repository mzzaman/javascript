// Introduction to JavaScript comparison operators

let r1 = 20 > 10; // true
let r2 = 20 < 10; // false
let r3 = 10 == 10; // true

// Compare numbers
let a = 10,
  b = 20;

console.log(a >= b); // false
console.log(a == 10); // true

// Compare strings

let name1 = "alice",
  name2 = "bob";

let result = name1 < name2;
console.log(result); // true
console.log(name1 == "alice"); // true

let f1 = "apple",
  f2 = "Banana";
let result2 = f2 < f1;
console.log(result2); // true

let result3 = f2.toLowerCase() < f1.toLowerCase();
console.log(result3); // false

// Compare an object with a non-object

let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return "20";
  },
};
console.log(apple > 10); // false
console.log(orange == 20); // true
