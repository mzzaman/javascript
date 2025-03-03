//   JavaScript Generators

function foo() {
  console.log("I");
  console.log("cannot");
  console.log("pause");
}
foo();

// ES6 generator function;
function* generator() {
  console.log("Invoked 1st time");
  yield 1;
  console.log("Invoked 2nd time");
  yield 2;
}

let gen = generator();
let result = gen.next();
console.log(result);

console.log(gen.next());

// More JavaScript generator examples
function* forever() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let first = forever();
console.log(first.next()); // 0
console.log(first.next()); // 1
console.log(first.next()); // 2

// Using generators to implement iterators;
class Sequence {
  constructor(start = 0, end = Infinity, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex < this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.step;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
    };
  }
}

let oddSequence = new Sequence(1, 10, 2);
for (const number of oddSequence) {
  console.log(number);
}

class Sequence2 {
  constructor(start = 0, end = Infinity, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  *[Symbol.iterator]() {
    for (let index = this.start; index < this.end; index += this.step) {
      yield index;
    }
  }
}

const evenSequence = new Sequence2(1, 10, 1);
for (const number of evenSequence) {
  console.log(number);
}

// Using a generator to implement the Bag data structure;
class Bag {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  add(element) {
    this.elements.push(element);
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let bag = new Bag();
bag.add("White");
bag.add("Blue");
bag.add("Red");

for (const b of bag) {
  console.log(b);
}
