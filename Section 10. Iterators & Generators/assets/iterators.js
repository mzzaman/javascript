// The Essential Guide to JavaScript Iterators

// The for loop issues;

let ranks = ["A", "B", "C"];

// for (let i = 0; i < ranks.length; i++) {
//   console.log(ranks[i]);
// }

// for (let rank of ranks) {
//   console.log(rank);
// }

let iterator = ranks[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

// Iteration protocols;

class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
    };
  }
}

// Even
let evenNumbers = new Sequence(2, 10, 2);
// for (const num of evenNumbers) {
//   console.log(num);
// }

let evenIterator = evenNumbers[Symbol.iterator]();
let result = evenIterator.next();
while (!result.done) {
  console.log(result.value);
  result = evenIterator.next();
}

// Odd
let oddNumbers = new Sequence(1, 10, 1);
// for (const odd of oddNumbers) {
//   console.log(odd);
// }

// Cleaning up;

class Series {
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
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.step;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
      return: () => {
        console.log("cleaning up......");
        return { value: undefined, done: true };
      },
    };
  }
}

let oddSeries = new Series(1, 10, 2);
for (const num of oddSeries) {
  if (num > 7) {
    break;
  }
  console.log(num);
}
