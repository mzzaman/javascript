// Javascript Try Catch

// const add = (x, y) => x + y;
// try {
//   let result = add(10, 15);
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }
// console.log("Bye");

const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};

let valid = isValidJSON(`{"language":"Javascript"}`);
console.log(valid);

// Javascript try...catch...finally
let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}

// Javascript Throw Exception
function add(x, y) {
  if (typeof x !== "number") {
    throw "The first argument must be a number";
  }
  if (typeof y !== "number") {
    throw "The second argument must be a number";
  }
  return x + y;
}
try {
  const resultError = add("a", 20);
  console.log(resultError);
} catch (error) {
  console.log(error);
}

// 3) Using JavaScript throw statement to throw a user-defined exception

class NumberError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid number`);
    this.name = "InvalidNumber";
  }
}

function check(x, y) {
  if (typeof x !== "number") {
    throw new NumberError(x);
  }

  if (typeof y !== "number") {
    throw new NumberError(y);
  }

  return x + y;
}

try {
  const resultIsOk = check("a", 10);
  console.log(resultIsOk);
} catch (e) {
  console.log(e.name, ":", e.message);
}

// Optional catch Binding;
