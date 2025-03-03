// JavaScript Async Generators;

function* sequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let seq = sequence(1, 5);
for (const num of seq) {
  console.log(num);
}

// What is an async generator;
async function* asyncSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield new Promise((resolve, reject) => {
      resolve(i);
    }, 1000);
  }
}

(async () => {
  let seqAsync = asyncSequence(1, 10);
  for await (const num of seqAsync) {
    console.log(num);
  }
})();
