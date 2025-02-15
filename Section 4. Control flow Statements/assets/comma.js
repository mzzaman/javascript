// Javascript Comma Operator;

let result = (10, 10 + 20);
console.log(result); // Output: 30;

let x = 10;
let y = (x++, x + 1);
console.log(x, y);

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
s = "";

for (let i = 0, j = 1; i <= board.length; i++, j++) {
  s += board[i] + " ";
  if (j % 2 === 0) {
    console.log(s);
    s = " ";
  }
}
