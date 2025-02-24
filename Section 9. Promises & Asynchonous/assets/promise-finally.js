// Javascript Promise Finally;

// Javascript Promise Finally Example;

class Connection {
  execute(query) {
    if (query != "Insert" && query != "Update" && query != "Delete") {
      throw new Error(`The ${query} is not supported`);
    } else {
      console.log(`Execute the ${query}`);
      return this;
    }
  }
  close() {
    console.log("Close the connection");
  }
}

const success = true;
function connect() {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(new Connection());
    } else {
      reject("Could not open the database connection");
    }
  });
}

let globalConnection;

connect()
  .then((connection) => {
    globalConnection = connection;
    return globalConnection.execute("Insert");
  })
  .then((connection) => {
    globalConnection = connection;
    return globalConnection.execute("Select");
  })
  .catch(console.log)
  .finally(() => {
    if (globalConnection) {
      globalConnection.close();
    }
  });

// 2) Using the Promise finally() method show a loading status;

document.getElementById("fetchButton").addEventListener("click", () => {
  const loadingElement = document.getElementById("loading");
  const contentElement = document.getElementById("content");

  // Show loading and hide content
  loadingElement.style.display = "block";
  contentElement.style.display = "none";

  // Make the API call to get posts

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      // Render the posts;
      const renderedPosts = posts
        .map((post) => {
          return `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            `;
        })
        .join("");

      // show the posts
      contentElement.innerHTML = renderedPosts;
    })
    .catch((error) => {
      // handle any errors
      contentElement.innerHTML = `<p>Failed to load data</p>`;
    })
    .finally(() => {
      // hide loading and show content;
      loadingElement.style.display = "none";
      contentElement.style.display = "block";
    });
});
