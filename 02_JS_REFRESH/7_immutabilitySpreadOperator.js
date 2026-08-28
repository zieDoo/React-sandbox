// Immutability in Javascript

// - Data is not modified directly - Instead new copies are made
// - Essential in React to trigger proper re-rendering
// - Helps you reason about changes and avoid side effects
// - Avoids unpredictable bugs caused by shared mutable state

// Core concept of functional programming.
// In React, where state should be immutable to ensure a proper re-renders.
//
// State is just a data thats are attached to eather a componenet or app itself and your React component watch for the update in this state. And React relies on comparing the old state vs the new state by reference. So if you mutate an object or array in your state directly its reference doesnt change so React may not realize that anything changed, therefore your component may not rerender.

// Spread operator

// Directly Mutated Array
const notes = ["Meeting Notes", "Grocery List"];
// notes.push("Workout Plan"); // ---> We changed original notes array by adding 'Workout Plan'.

// If we are dealing with React state it might not detected, it might not rerender and application will not work correctly.

console.log(notes);

// to do it in Immutable way - we use 'Spread Operator' (...)

const newNotes = [...notes]; // <--- spread operator (we made a copy)
console.log(newNotes);

const newNotesPlus = [...newNotes, "Workout Plan"]; // <--- another copy + new value
console.log(newNotesPlus);

// original array hasnt changed

// If we are using React we updated the state and it would compare these two (original/old with new) and trigger a rerender.

// dificult with vannila JS.
// If you doing things in immutable way its not just when you add to a the array, if you want to change something, then you have to do that in immutable way as well.

// We have more ways to do change of the element, for example 'Grocery List' -> 'Shopping List'
const newNotes2 = notes.map((note) =>
  // if the note is equal to Grocery list then we want to change it to Shopping list else then just keep it as original note (Grocery List)
  note === "Grocery List" ? "Shopping List" : note,
);

console.log(notes);
console.log(newNotes2);

// That's how we can do things in mutable way with arays.

// Changes with Objects

const user = {
  name: "John Doe",
  age: 30,
};

// user.age = 31; // update with mutable way

console.log(user);

// If we want to do it with immutable way, we can again use Spread Operator (...)

// we make a copy of original object and change the property we want
const newUser = {
  ...user, // our copied object
  age: 31, // changed required value
};

console.log(newUser);
