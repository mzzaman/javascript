// JavaScript Asynchronous Iterators;
// class Sequence {
//   constructor(start = 0, end = Infinity, step = 1) {
//     this.start = start;
//     this.end = end;
//     this.step = step;
//   }

//   [Symbol.iterator]() {
//     let counter = 0;
//     let nextIndex = this.start;
//     return {
//       next: () => {
//         if (nextIndex < this.end) {
//           let result = { value: nextIndex, done: false };
//           nextIndex += this.step;
//           counter++;
//           return result;
//         }
//         return { value: counter, done: true };
//       },
//     };
//   }
// }

// let evenNumbers = new Sequence(1, 10, 2);
// let iterator = evenNumbers[Symbol.iterator]();
// console.log(iterator.next());
// for (const num of evenNumbers) {
//   console.log(num);
// }

// Asynchronous Iterator;
class AsyncSequence {
  constructor(start = 0, end = Infinity, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.asyncIterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: async () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.step;
          counter++;
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(result);
            }, 1000);
          });
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ value: counter, done: true });
          }, 1000);
        });
      },
    };
  }
}

// The for await...of statement;

(async () => {
  let sequence = new AsyncSequence(1, 10, 1);
  for await (let value of sequence) {
    console.log(value);
  }
})();
