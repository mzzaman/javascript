// JavaScript Promise.withResolvers;

// Introduction to the JavaScript Promise.withResolvers method

// let resolve, reject;

// const promise = new Promise((res, rej) => {
//   resolve = res;
//   reject = rej;
// });

Math.random() > 0.5 ? resolve("Success") : reject("Error");

const { promise, resolve, reject } = Promise.withResolvers();
Math.random() > 0.5 ? resolve("Success") : reject("Error");
