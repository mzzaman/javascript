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
function getStudents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "devil", email: "devil@test.com" },
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
}

// function onFulfilled(users) {
//   console.log(users);
// }

// const promise = getStudents();
// promise.then((user) => {
//   console.log(user);
// });

// Consuming a Promise: then, catch, finally

// 1) The then() method

function getTeacher() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "devil", email: "devil@test.com" },
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
}

const promiseTeacher = getTeacher();
// promiseTeacher.then(onFulfilled);
// function onFulfilled(user) {
//   console.log("Total User: ", user);
// }
// use arrow function;
promiseTeacher.then((user) => {
  console.log(user);
});

let success = true;

function getPeople() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "devil", email: "devil@test.com" },
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

// function onFulfilledPerson(users) {
//   console.log(users);
// }

// function onRejectedPerson(error) {
//   console.log(error);
// }

const promisePeople = getPeople();
// promisePeople.then(onFulfilledPerson, onRejectedPerson);

// Convert Into Arrow Function;

promisePeople.then(
  (users) => {
    console.log(users);
  },
  (error) => {
    console.log(error);
  }
);

// 2) The catch() method;

function getDevils() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "devil", email: "devil@test.com" },
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

const promiseDevil = getDevils();
promiseDevil.catch((error) => {
  console.log(error);
});

// 3) The finally() method;

// A practical JavaScript Promise example
