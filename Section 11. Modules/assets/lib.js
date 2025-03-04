function displayMessage(message) {
  const el = document.createElement("div");
  el.textContent = message;
  document.body.appendChild(el);
}

function displayName(name) {
  const el = document.createElement("div");
  el.textContent = name;
  document.body.appendChild(el);
}

class Counter {
  constructor() {
    this.count = 1;
  }

  increase() {
    this.count++;
  }

  get current() {
    return this.count;
  }
}

function sayHi() {
  alert("hi");
}

function sayBy() {
  alert("Bye");
}

let users;
export default (async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  users = await response.json();
})();

export { displayMessage, displayName, Counter, sayHi, sayBy, users };
