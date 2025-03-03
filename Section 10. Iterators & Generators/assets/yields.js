// JavaScript yield;

// JavaScript yield examples;

// A) Returning a value;
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

const find = foo();
console.log(find.next());

// B) Returning undefined
function* bar() {
  yield;
}
const b = bar();
console.log(b.next());

// C) Passing a value to the next() method;

function* generate() {
  let result = yield;
  console.log(`Result is: ${result}`);
}

const gene = generate();
gene.next(); // undefined;

gene.next(10000);

// D) Using yield in an array;
function* baz() {
  let arr = [yield, yield];
  console.log(arr);
}

var z = baz();

console.log(z.next());
console.log(z.next(1));
console.log(z.next(2));

// E) Using yield to return an array;
function* yieldArray() {
  yield 1;
  yield [20, 30, 40];
}

let y = yieldArray();

console.log(y.next());
console.log(y.next());
console.log(y.next());

// F) Using the yield to return individual elements of an array
function* yieldArrayElements() {
  yield 1;
  yield* [20, 30, 40];
}

let a = yieldArrayElements();

console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 20, done: false }
console.log(a.next()); // { value: 30, done: false }
console.log(a.next()); // { value: 40, done: false }
