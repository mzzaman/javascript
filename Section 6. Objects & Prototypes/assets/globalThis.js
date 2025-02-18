// JavaScript globalThis;

// Introduction to the JavaScript globalThis object;

const canFetch = typeof globalThis.fetch === "function";
console.log(canFetch);

console.log(globalThis === window);

console.log(this === window);
