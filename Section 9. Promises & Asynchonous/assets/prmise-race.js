// JavaScript Promise.race();

// 1) Simple JavaScript Promise.race() examples;

const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});

Promise.race([first, second])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 2 * 1000);
});

Promise.race([p1, p2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`));

// 2) Practical JavaScript Promise.race() example

// after 0.5 seconds, if the getData() has not resolved, then show
// the Loading indicator

const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Promise.race() Demo";
      resolve(message);
    }, DATA_LOAD_TIME);
  });
}
function showContent(message) {
  document.getElementById("message").textContent = message;
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), TIMEOUT);
  });
}

function showLoadingIndicator() {
  document.getElementById("loader").className = "loader";
}

function hideLoadingIndicator() {
  document.getElementById("loader").className = "";
}

// handle button click event;
const btn = document.getElementById("btnGet");

btn.addEventListener("click", () => {
  // reset UI if user click the second time;

  reset();

  // show content or loading
  Promise.race([
    getData().then(showContent).then(hideLoadingIndicator),
    timeout(),
  ]).catch(showLoadingIndicator);
});

// reset UI;

function reset() {
  hideLoadingIndicator();
  showContent("");
}
