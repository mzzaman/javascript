// JavaScript Promise.allSettled()

//  JavaScript Promise.allSettled() example;

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise was Resolve");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise was Rejected");
    reject("Error");
  }, 2000);
});

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1 * 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2 * 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 3 * 1000);
});

Promise.allSettled([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
