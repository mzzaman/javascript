// JavaScript Default Parameters

function say(message = "hi") {
  console.log(message);
}
say();

say("Hello World");

// Arguments vs. Parameters

function add(x, y) {
  return x + y;
}

console.log(add(100, 200));

function showUndefined(message) {
  console.log(message);
}
showUndefined(); // undefined;

// How Works default parameters;

// Default Parameters;

function defaultParameter(message) {
  message = typeof message !== "undefined" ? message : "Default Parameter";
  return message;
}

console.log(defaultParameter());

function createDiv(
  height = "100px",
  width = "100px",
  margin = "10px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.width = width;
  div.style.height = height;
  div.style.border = border;
  div.style.marginBlockEnd = margin;
  document.body.appendChild(div);
  return div;
}

createDiv();
createDiv();
createDiv();
