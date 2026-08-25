// Template Literals
// = they are a ways to use dynamic variables or expresions inside of strings in JS
// It is a way of concatenating strings.

const name = "John";
const age = 30;

// But very tedious to write.
const greeting =
  "Hello, my name is " + name + " and I am " + age + " years old";

// With template literals - ``
// we can even have an expression there ${1 + 1}
const newGreeting = `Hello, my name is ${name} and I am ${age} years old`;

// console.log(greeting);
console.log(newGreeting);

// ---------------------------------------------------

// With functions

const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  // Older way
  // return date.toLocaleDateString() + " at " + date.toLocaleTimeString();

  // Newer way
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

// note object
const note = {
  title: "Discuss project",
  timestamp: Date.now(),
};

console.log(`Last Edited: ${formatDate(note.timestamp)}`);
