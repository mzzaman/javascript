// promise url;

const url = "https://www.javascripttutorial.net/sample/promise/api.json";
const btn = document.getElementById("btnGet");
const msg = document.getElementById("message");

// Define the load() function;
function load(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.response);
      } else {
        reject(this.status);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

// Add Event on Button;
btn.addEventListener("click", () => {
  load(url)
    .then((response) => {
      const result = JSON.parse(response);
      console.log(result);

      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    });
});
