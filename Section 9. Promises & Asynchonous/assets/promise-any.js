// JavaScript Promise.any();
// 1) All promises fulfilled example

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Promise 1 Fulfilled`);
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Promise 2 Fulfilled`);
    resolve(2);
  }, 2000);
});

const p = Promise.any([p1, p2]).then((value) => {
  console.log(`Promise Returned`);
  console.log(value);
});

// 2) One promise rejected example;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise One Reject");
    reject("Error");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Two Done");
    resolve(10);
  }, 2000);
});

const promise = Promise.any([promise1, promise2]).then((value) => {
  console.log("Return Promise");
  console.log(value);
});

//  3) All promises rejected example;

const promiseReject1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise One Rejected");
    reject("Error One");
  }, 1000);
});

const promiseReject2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Two Rejected");
    reject("Error Two");
  }, 2000);
});

const pReject = Promise.any([promiseReject1, promiseReject2]);
pReject.catch((error) => {
  console.log("Returned Promise");
  console.log(error, error.errors);
});

// using CDN;
function getImageBlob(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }
    return response.blob();
  });
}

let cat = getImageBlob(
  "https://upload.wikimedia.org/wikipedia/commons/4/43/Siberian_black_tabby_blotched_cat_03.jpg"
);
let dog = getImageBlob(
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg"
);

Promise.any([cat, dog])
  .then((data) => {
    let objectURL = URL.createObjectURL(data);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(e.message);
  });
