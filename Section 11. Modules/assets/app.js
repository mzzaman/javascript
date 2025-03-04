import promise, {
  displayMessage,
  displayName,
  Counter,
  sayHi,
  sayBy,
  users,
} from "./lib.js";

displayMessage("Hello World");

displayName("Moniruzzaman");

const counter = new Counter();

displayMessage(counter.count);

// sayHi();
// sayBy();

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  sayHi();
});

function render(users) {
  if (!users) {
    throw new Error("The user list is not available");
  }

  const list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
    })
    .join("");

  return `<ol>${list}</ol>`;
}

// const container = document.querySelector(".container");
// try {
//   container.textContent = render(users);
// } catch (e) {
//   container.textContent = e;
// }

promise.then(() => {
  let container = document.querySelector(".container");
  try {
    container.innerHTML = render(users);
  } catch (error) {
    container.innerHTML = error;
  }
});
