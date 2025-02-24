// JavaScript async/await;

const TIME_OUT = 1000;
// function getUser(userId, callback) {
//   console.log("Get user from the database.");
//   setTimeout(() => {
//     callback({
//       userId: userId,
//       userName: "devil",
//     });
//   }, 1 * TIME_OUT);
// }

// function getServices(user, callback) {
//   console.log(`Get service of ${user.userName} from the API`);
//   setTimeout(() => {
//     callback(["Email", "VPN", "CDN"]);
//   }, 2 * TIME_OUT);
// }

// function getServicesCost(service, callback) {
//   console.log(`Calculate service costs of ${service}`);
//   setTimeout(() => {
//     callback(service.length * 100);
//   }, 3 * TIME_OUT);
// }

// getUser(100, (user) => {
//   getServices(user, (services) => {
//     getServicesCost(services, (cost) => {
//       console.log(`The service cost is ${cost}`);
//     });
//   });
// });

// Avoid callback hell issue;

// Using ES6 Promise();
function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        userName: "devil",
      });
    }, TIME_OUT);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.userName} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * TIME_OUT);
  });
}

function getServicesCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * TIME_OUT);
  });
}

// chain the promises;
// getUser(100).then(getServices).then(getServicesCost).then(console.log);

async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServicesCost(services);
  console.log(`the service cost is ${cost}`);
}
showServiceCost();

// The async keyword
// async function sayHi(name) {
//   console.log(`Hello ${name}`);
// }
// sayHi("Devil").then(console.log);

async function sayHello() {
  return Promise.resolve("Hello");
}
sayHello().then(console.log);

// Error handling;
async function getUser2(userId) {
  await Promise.reject(new Error("Invalid User Id"));
}

async function setUser(userId) {
  try {
    const user = await Promise.reject(new Error("Invalid User Id"));
  } catch (error) {
    console.log(error);
  }
}
