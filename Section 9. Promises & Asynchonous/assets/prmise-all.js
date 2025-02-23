// JavaScript Promise.all();

// 1) Resolved promises example

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
    reject(new Error("Something Wrong"));
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
    reject(new Error("Something Wrong"));
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
    reject(new Error("Something Wrong"));
  }, 3 * 1000);
});

Promise.all([p1, p2, p3])
  .then((results) => {
    const total = results.reduce((p, c) => p + c);
    console.log(`Result: ${results}`);
    console.log(`Total: ${total}`);
  })
  .catch((error) => {
    console.log(error);
  });

// 2) Rejected promises example;

const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1000);
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(new Error("Failed"));
  }, 2 * 1000);
});

const third = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([first, second, third]).then(console.log).catch(console.log);
