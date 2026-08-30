// Arrow Functions,
// Template Literals,
// Ternary Short Circuit Rendering,
// Destructuring, Rest Operator,
// Array Methods,
// Optional Chaining, Nullish Coalescing Operator,
// Immutability, Spread Operator,
// Promises, Async Await

// =================================================================================
// =================================================================================
// =================================================================================

// Úloha 1 — Arrow Functions + Template Literals

// Máš:

// const firstName = "Samuel";
// const age = 40;

// Napíš arrow function getIntroduction, ktorá vráti string:

// Hi, my name is Samuel and I am 40 years old.

// Použi template literal.

// Podmienka:

// žiadny function
// použi arrow function
// použi template literal

const firstName = "Samuel";
const age = 40;

const getIntroduction = (firstName, age) => {
  return `Hi, my name is ${firstName} and I am ${age} years old`;
};

console.log(getIntroduction(firstName, age));

// =================================================================================

// Úloha 2 — Ternary + Short-Circuit

// Máš:

// const user = {
//   name: "Samuel",
//   isLoggedIn: true,
//   isAdmin: false,
// };

// Napíš kód, ktorý vypíše:

// Welcome, Samuel!

// ak je isLoggedIn true, a:

// Please log in.

// ak je false.

// Podmienka: Použi ternary operator. Žiadny if/else.

// console.log(user.isLoggedIn ? `Welcome, ${user.name}` : "Please log in.");

// =================================================================================

// Úloha 3 — Short-Circuit Rendering

// Teraz využijeme &&.

// Máš:

const user = {
  name: "Samuel",
  isLoggedIn: true,
  isAdmin: true,
};

// Chceme:

// ak je isLoggedIn true → vypísať "Welcome back!"
// ak je isAdmin true → navyše vypísať "Admin panel"

// Použi iba &&, žiadny if, žiadny ternary.

// Napríklad výsledok pre aktuálne hodnoty má byť: Welcome back!

// console.log(user.isLoggedIn && user.isAdmin ? "Welcome back" : "Admin panel");

const newUser = `
${user.isLoggedIn && "Welcome Back"}
${user.isAdmin && ""}
`;

// const newUser = `${user.isLoggedIn && "Welcome Back"}`;

user.isLoggedIn && console.log("Welcome back!");
user.isAdmin && console.log("Admin panel");

// console.log(newUser);

// =================================================================================

// Úloha 4 — Ternary + &&

// Teraz ich spojíme.

// Máš:

const user2 = {
  name: "Samuel",
  isLoggedIn: false,
  isAdmin: true,
};

// Chceme:

// Welcome, Samuel!
// Admin panel

// Ale ak:

// isLoggedIn: false

// chceme:

// Please log in.

// Podmienky:

// použi ternary na isLoggedIn
// použi && na isAdmin
// žiadny if/else

const welcomedUser = user2.isLoggedIn
  ? `Welcome ${user2.name}`
  : "Please log in";

const adminPanel = user2.isAdmin && "Admin panel 2";

console.log(welcomedUser);
console.log(adminPanel);

// ternary → keď máme dve alternatívy
// condition ? A : B

// && → keď chceme niečo zobraziť iba ak je podmienka true
// condition && A

// condition && something = „zobraz something, iba ak je condition true.“

// =================================================================================

// Úloha 5 — Array Methods

// Máš:

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 40 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 350 },
];

// Vytvor novú premennú expensiveProducts, ktorá bude obsahovať iba produkty drahšie ako 100 €.

// output:

// [
//   { name: "Laptop", price: 1200 },
//   { name: "Monitor", price: 350 }
// ]

// Podmienky:

// použi filter()
// nevytváraj nové pole ručne
// použi arrow function

const expensiveProducts = products.filter((item) => item.price > 100);

console.log(expensiveProducts);

// =================================================================================

// Úloha 6 — map()

// Máš:

const customers = [
  { name: "Peter", age: 25 },
  { name: "Martin", age: 31 },
  { name: "Lucia", age: 28 },
];

// Vytvor novú premennú customerNames, ktorá bude obsahovať:

// ["Peter", "Martin", "Lucia"]

// Podmienky:

// použi map()
// použi arrow function
// pôvodné customers nechaj nezmenené

const customerNames = customers.map((customer) => customer.name);
console.log(customers);
console.log(customerNames);

// =================================================================================

// Úloha 7 — filter() + map()

// Máš:

const employees = [
  { name: "Peter", department: "IT", salary: 2800 },
  { name: "Martin", department: "HR", salary: 2200 },
  { name: "Lucia", department: "IT", salary: 3400 },
  { name: "Jana", department: "Marketing", salary: 2600 },
];

// Vytvor itEmployees, ktoré bude obsahovať mená IT zamestnancov, ktorí zarábajú viac ako 3000 €.

// Výsledok:

// ["Lucia"]

// Podmienky:

// použi filter()
// použi map()
// použi arrow functions
// žiadny for / forEach
// žiadny if

const itEmployees = employees
  .filter((employee) => employee.department === "IT" && employee.salary > 3000)
  .map((employee) => employee.name);

console.log(itEmployees);

// =================================================================================

// Úloha 8 — find()

// Teraz trochu iný Array Method.

// Máš:

const books = [
  { title: "JavaScript Basics", pages: 180 },
  { title: "React in Action", pages: 320 },
  { title: "Clean Code", pages: 450 },
  { title: "CSS Mastery", pages: 280 },
];

// Nájdi knihu, ktorá sa volá "React in Action" a ulož ju do:

// const selectedBook = ...

// Výsledok má byť celý objekt:

// {
//   title: "React in Action",
//   pages: 320
// }

// Podmienky:

// použi find()
// použi arrow function
// žiadny for
// žiadny if

// Tentokrát nechcem map() ani filter().

const selectedBook = books.find((book) => book.title === "React in Action");
console.log(selectedBook);

// =================================================================================

// Úloha 9 — some()

// Máš:

const orders = [
  { product: "Laptop", price: 1200, paid: true },
  { product: "Mouse", price: 40, paid: true },
  { product: "Monitor", price: 350, paid: false },
];

// Vytvor premennú:

// const hasUnpaidOrder = ...

// ktorá bude obsahovať true, ak aspoň jedna objednávka nie je zaplatená.

// Výsledok:

// true

// Podmienky:

// použi some()
// použi arrow function
// žiadny if
// žiadny for

// =================================================================================
// =================================================================================

// Pre porovnanie
// some()  → Je tam ASPOŇ JEDEN? → true / false
// every() → SpĺŇAJÚ VŠETKY?     → true / false
// find()  → KTORÝ JE PRVÝ?      → prvok / undefined
// filter()→ KTORÉ VŠETKY?       → nové pole

// Takže keď v kóde uvidíš:

// array.some(...)

// môžeš si v hlave preložiť:

// „Je v tomto poli aspoň jeden taký?“

// =================================================================================
// =================================================================================

const hasUnpaidOrder = orders.some((order) => order.paid === false);

console.log(hasUnpaidOrder);

// =================================================================================

// Úloha 10 — every()

// Teraz opak some().

// Máš:

const students = [
  { name: "Peter", score: 85 },
  { name: "Martin", score: 72 },
  { name: "Lucia", score: 91 },
  { name: "Jana", score: 68 },
];

// Vytvor:

// const allPassed = ...

// ktoré bude true, iba ak každý študent má score aspoň 60.

// Výsledok má byť:

// true

// Použi every() + arrow function.

// Žiadny if, for, filter() ani some().

const allPassed = students.every((student) => student.score >= 60);
console.log(allPassed);

// =================================================================================

// Úloha 11 — reduce()

// Teraz dáme jednu z najdôležitejších array metód.

// Máš:

const cart = [
  { product: "Laptop", price: 1200 },
  { product: "Mouse", price: 40 },
  { product: "Keyboard", price: 80 },
];

// Vytvor:

// const cartTotal = ...

// ktoré bude obsahovať:

// 1320

// Použi:

// reduce()
// arrow function
// žiadny for
// žiadny if
// map() / filter()

// Cieľ: spočítať celkovú cenu všetkých produktov v košíku.
