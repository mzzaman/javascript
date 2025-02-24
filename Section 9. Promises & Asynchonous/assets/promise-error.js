// Javascript Promise Error Handling;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    resolve({
      userId: id,
      username: "admin",
    });
  });
}

// Normal error;

function getStudent(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Invalid id argument");
  }
  return new Promise((resolve, reject) => {
    resolve({
      userId: id,
      username: "devil",
    });
  });
}

getStudent("a")
  .then((result) => {
    console.log(result.username);
  })
  .catch((err) => {
    console.log(err);
  });

// try / catch

try {
  getStudent(10)
    .then((result) => {
      console.log(result.username);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}
