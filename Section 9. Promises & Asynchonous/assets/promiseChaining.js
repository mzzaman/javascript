// TODO: Promise Chaining;

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result * 4;
  });

console.log("Multiple handlers");

//   Multiple handlers for a promise;
p.then((result) => {
  console.log(result);
  return result * 2;
}); // 10;

p.then((result) => {
  console.log(result);
  return result * 3;
}); // 10;

p.then((result) => {
  console.log(result);
  return result * 4;
}); // 10;

// Returning a Promise;

let first = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

first
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      });
    }, 3 * 1000);
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3 * 1000);
    });
  })
  .then((result) => {
    console.log(result);
  });

// Generate Random Number;

function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3 * 100);
  });
}

generateNumber(10)
  .then((result) => {
    console.log(result);
    return generateNumber(result * 2);
  })
  .then((result) => {
    console.log(result);
    return generateNumber(result * 3);
  })
  .then((result) => {
    console.log(result);
  });

//    getUser Function;
function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get the user from the database");

    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the service of ${user.username} from the API`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3 * 1000);
  });
}

function getServicesCost(service) {
  return new Promise((resolve, reject) => {
    console.log(`Calculating the service cost of ${service}`);
    setTimeout(() => {
      resolve(service.length * 100);
    }, 2 * 1000);
  });
}

getUser().then(getServices).then(getServicesCost).then(console.log);
