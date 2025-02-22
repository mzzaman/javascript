// Javascript Promises;

function getUsers() {
  return [
    { username: "devil", email: "devil@test.com" },
    { username: "john", email: "john@test.com" },
    { username: "jane", email: "jane@test.com" },
  ];
}

function findUser(username) {
  let users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser("devil"));

function getAnotherUsers() {
  let users = [];
  // delay 1 second (1000ms);
  setTimeout(() => {
    users = [
      { username: "devil", email: "devil@test.com" },
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);
  return users;
}

function findAnotherUser(username) {
  let users = getAnotherUsers();
  const user = users.find((user) => user.username === username);
  return user;
}
// console.log(findAnotherUser("devil")); // undefined;

// Using callbacks to deal with an asynchronous operation;

function getUsersAsynchronous(callback) {
  setTimeout(() => {
    callback([
      { username: "devil", email: "devil@test.com" },
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 1000);
}

function findUserAsynchronous(username, callback) {
  getUsersAsynchronous((users) => {
    const user = users.find((user) => user.username === username);
    return callback(user);
  });
}

findUserAsynchronous("devil", console.log);

// Creating a promise;
const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});
