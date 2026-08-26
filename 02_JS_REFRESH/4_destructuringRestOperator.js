const notes = [
  { title: "Meeting Notes", content: "Discuss project roadmap" },
  { title: "Grocery List", content: "Buy milk, eggs, bread" },
  { title: "Workout Plan", content: "Push day: Bench, Shoulder Press" },
  { title: "Recipe Ideas", content: "Pasta, Salad, Tacos" },
];

// Destructuring from Arrays = with REST OPERATOR (...)

// const [firstNote, secondNote, hello] = notes;

// console.log(firstNote); // we can get an item from array with variable
// console.log(secondNote.title); // or we can get specific property
// console.log(hello); // we can use any name of variable

// we can use 'Rest operator' = '...<name of variable>'

const [firstNote, secondNote, ...restNotes] = notes;

console.log(firstNote);
console.log(secondNote);
console.log(restNotes);

// Destructuring Objects values

const note = {
  title: "Meeting Notes",
  content: "Discuss project roadmap",
  isPinned: true,
};

// and we can pull whatever property from object we want. But we have to use the same name of property
// (title, content, isPinned in our case)

const { title } = note;

console.log(title);

// We can rename the property we have in object with ":" to whatever name we want.
// here, we renamed title to noteTitle.

const { title: noteTitle, isPinned } = note;

console.log(noteTitle);

// React view - quick example

// component are usually functions
// typically we write functions with props like this.

// function NoteCard(props){
//     props.title
// }

// More common we are doing destructuring in the definition of variale space

// destructurin from props to title here, rather then props.title
function NoteCard({ title }) {
  title;
}

// Nested Destructuring

const user = {
  name: "Ben",
  address: { city: "Boston", state: "MA" },
};

// const { name, address } = user;
// console.log(address);

// Ak chceme dostat iba Mesto adresy alebo stat. tak pouzijeme {} v destructuringu

const {
  name,
  address: { city, state },
} = user;

console.log(city, state);

// Destructuring arrays in object

const user2 = {
  name2: "Ben",
  address: { city: "Boston", state: "MA" },
  hobbies: ["Movies", "Sports", "Music"],
};

// const { name2, hobbies } = user2;
// console.log(hobbies);

// So if we want to show nested item in array

const {
  name2,
  //   hobbies: [firstHobby], // we can chose nested array
  hobbies: [firstHobby, ...otherHobbies], // also we can use rest operator here
} = user2;

console.log(firstHobby);
console.log(otherHobbies);
