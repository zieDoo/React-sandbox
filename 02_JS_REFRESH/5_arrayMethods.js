// Manipulating arrays in a variety of different ways.

const notes = [
  {
    title: "Meeting Notes",
    content: "Discuss project roadmap",
    isPinned: true,
  },
  { title: "Grocery List", content: "Buy milk, eggs, bread", isPinned: false },
  {
    title: "Workout Plan",
    content: "Push day: Bench, Shoulder Press",
    isPinned: true,
  },
  { title: "Recipe Ideas", content: "Pasta, Salad, Tacos", isPinned: false },
];

// MAP
// - allows us to run a function on each of item in the array
// does return a new Array. So pouzijeme novu variable

const noteTitles = notes.map((note) => note.title);

console.log(noteTitles);

// mozme pridat aj index do map funkcie (ak chceme zacinat od 1, pridame ${index + 1})
const noteTitlesIndexed = notes.map((note, index) => `${index}. ${note.title}`);

console.log(noteTitlesIndexed);

// Filter
// It creates a new array, like map do.
// But it runs it through a condition. Its gona transform that array based on that condition.

const pinnedNotes = notes.filter((note) => note.isPinned);

console.log(pinnedNotes);

// If we want to get only title: (we can chained these methods)

const pinnedNotesTitle = notes
  .filter((note) => note.isPinned)
  .map((note) => note.title);

console.log(pinnedNotesTitle);

// Reduce
// - applies the function against the acumulator and each element in the array from left to right and it reduce it to a single value.
// (used for summing up numbers, concatenating strings, combining elements in the array)

const numbers = [1, 2, 3, 4, 5]; // lets summ these numbers

// Reduce is taking two things: 1) total = acc =>
// 2) number => value. It is currect value of current iteration

// 0 = accumulator and default value is 0. Zaciname pridavat od 0
const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum);

// get the total numbers of content characters (length of content)

const totalCharacters = notes.reduce(
  (total, note) => total + note.content.length,
  0,
);

console.log(totalCharacters);

// ForEach
// - doesnt return a new array
// - Used when you wanna prform an action on each element in the array

notes.forEach((note) => console.log(note.title));
// here we didnt put result to a variable as we run the function (console.log) on each element
