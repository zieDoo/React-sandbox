// Conditional Rendering
//
// - show something on the page or on the component, based on certain value.
// (status - in progress, completed).

// There are two main ways for Conditional Rendering:

// Ternarny Operator
// - consise way to write if statement.
// In JSX (what react components retursn), we can put dynamic expressions in the curly braces {}
// but we cannot put tere a whole "if" statement.

// Regular IF statement
const number = 2;
let message;

if (number % 2 === 0) {
  message = "Even Number";
} else {
  message = "Odd Number";
}

// console.log(message);

// 1) Ternarny Operator

const numberTern = 3;

// <if numberTerm %2 === 0> ---> condition (our IF statement)
// ? (then) ternary operator = True condition
// : (else) = Failed condition
// whatever you want to happen

const messageTern = numberTern % 2 === 0 ? "Even Number" : "Odd Number";

console.log(messageTern);

// More realistic example

const note = {
  title: "Meeting notes",
  content: "Discuss project roadmap",
  timestamp: Date.now(),
  isPinned: false,
};

// with ternary operator in status
const noteText = `
Title: ${note.title}
Status: ${note.isPinned ? "Pinned Note" : "Regular Note"} 
Last Edited: ${new Date(note.timestamp).toLocaleString()}
`;

console.log(noteText);

// 2) Short Circuit Rendering

// (podmienené vykresľovanie pomocou skráteného vyhodnocovania)

// Operátor && využíva tzv. short-circuit evaluation (skrátené vyhodnocovanie)
// – ak je ľavá strana false, pravá sa už nevyhodnocuje.

console.log(false && "Hello"); // vrati false (lava strana je FALSE)
console.log(null && "Hello"); // vrati null

console.log(true && "Hello"); // vrati Hello (lebo lava strana je TRUE)
console.log("hello1" && "Hello"); // vrati Hello (L = true)

// More Practical Example

const isLoggedIn = false;

function showWelcome() {
  return isLoggedIn && "Welcome, User";
  // or we can use ternary here as well
  // return isLoggedIn ? "Welcome, User" : '';
}

console.log(showWelcome());
