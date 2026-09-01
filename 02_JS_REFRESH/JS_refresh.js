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

// IMPLICITNY RETURN = bez {} netreba pisat 'return'
const cartTotal = cart.reduce((total, actual) => total + actual.price, 0);

// NEFUNGUJE LEBO CHYBA slovo RETURN - explicitne dane. pri {} treba davat return.
// const cartTotal = cart.reduce((total, actual) => {
//   total + actual.price;
// }, 0);

console.log(cartTotal);

// =================================================================================

// Úloha 12 — reduce()

// Máš:

const expenses = [15, 8, 22, 10, 5];

// Vytvor premennú totalExpenses, ktorá bude obsahovať súčet všetkých výdavkov.

// Výsledok:

// 60

// Podmienky:

// použi reduce()
// použi arrow function
// použi počiatočnú hodnotu 0
// žiadny for
// žiadny if

const totalExpenses = expenses.reduce((total, actual) => {
  return total + actual;
}, 0);

console.log(totalExpenses);

// =================================================================================

// Úloha 13 — reduce() trochu inak

// Tentokrát nechcem sčítať čísla.

// Máš:

const words = ["Hello", "world", "from", "JavaScript"];

// Použi reduce() a vytvor:

// const sentence

// tak, aby výsledok bol:

// Hello world from JavaScript

// Podmienky:

// reduce()
// arrow function
// výsledok musí byť jeden string
// žiadny join()

// const sentence = words.reduce((total, actual) => `${total} ${actual}`, "");  // dobre ale na zaciatku je medzera

// Lepsie
const sentence = words.reduce(
  (total, actual) => (total ? `${total} ${actual}` : actual),
  "",
);

// Čiže:

// Ak už total niečo obsahuje → pridaj medzeru + nové slovo.
// Ak je total prázdny → pridaj iba prvé slovo.

console.log(sentence);

// =================================================================================

// Úloha 14 — includes()

// Máš:

const availableLanguages = ["JavaScript", "Python", "TypeScript", "Java"];

// Vytvor:

// const knowsJavaScript = ...

// ktorá bude obsahovať true, ak sa "JavaScript" nachádza v poli.

// Výsledok:

// true

// Podmienky:

// použi includes()
// žiadny if
// žiadny for
// žiadny find() / some()

const knowsJavaScript = availableLanguages.includes("JavaScript");

console.log(knowsJavaScript);

// =================================================================================

// Úloha 15 — sort()

// Máš:

const scores = [45, 12, 89, 34, 67];

// Vytvor sortedScores, ktoré bude obsahovať čísla od najmenšieho po najväčšie:

// [12, 34, 45, 67, 89]

// Použi sort().

// const sortedScores = scores.sort(); // toto bola len nahoda.

// Sort funguje takto:

const sortedScores = scores.sort((a, b) => b - a);

console.log(sortedScores);

// (a - b) → ascending - [1,2,3,5,9]
// (b - a) → descending - [9,8,7,3,1, -2]

// =================================================================================

// Úloha 16 — join()

// Máš:

const skills = ["HTML", "CSS", "JavaScript", "React"];

// Vytvor premennú:

// const skillsList = ...

// tak, aby výsledok bol jeden string:

// HTML, CSS, JavaScript, React

// Použi join().

// Podmienky:

// join()
// map()
// reduce()
// for

const skillsList = skills.join(", ");

console.log(skillsList);

// join()  → array → string
// split() → string → array

// =================================================================================

// Úloha 17 — forEach()

// Máš:

const tasks = ["Learn JavaScript", "Practice React", "Build a project"];

// Použi forEach() a vypíš každú úlohu samostatne:

// Learn JavaScript
// Practice React
// Build a project

// Podmienky:

// forEach()
// arrow function
// map()
// for
// reduce()

tasks.forEach((task) => console.log(task));

// map()      → vytvára nové pole
// filter()   → vytvára nové pole
// find()     → vráti jeden prvok
// some()     → true / false
// every()    → true / false
// reduce()   → jedna výsledná hodnota
// forEach()  → iba vykoná niečo pre každý prvok

// =================================================================================

// Úloha 18 — Destructuring + Rest Operator

// Máš:

const laptop = {
  brand: "Lenovo",
  model: "ThinkPad",
  year: 2024,
  ram: 32,
  storage: "1TB",
};

// Pomocou object destructuringu a rest operátora vytvor:

// brand
// model
// specifications → všetky ostatné properties

// Výsledok:

// Lenovo
// ThinkPad
// { year: 2024, ram: 32, storage: "1TB" }

// Podmienky:

// brand a model musia byť získané destructuringom
// ostatné properties musí zachytiť rest operator
// nič nevytváraj ručne

const { brand, model, ...hwSpec } = laptop;

console.log(brand);
console.log(model);
console.log(hwSpec);

// =================================================================================

// Úloha 19 — Array Destructuring + Rest

// Doteraz sme robili object destructuring. Teraz skúsime array destructuring.

// Máš:

const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
];

// Pomocou array destructuringu + rest operátora vytvor:

// primaryLanguage → prvý element
// secondaryLanguage → druhý element
// otherLanguages → všetky zostávajúce elementy

// Výsledok:

// JavaScript
// TypeScript
// ["Python", "Java", "C++"]

// Podmienky:

// nepouži programmingLanguages[0], [1] atď.
// použi destructuring
// použi rest operator ...

const [primaryLanguage, secondaryLanguage, ...otherLanguages] =
  programmingLanguages;

console.log(primaryLanguage);
console.log(secondaryLanguage);
console.log(otherLanguages);

// =================================================================================

// Úloha 20 — Optional Chaining ?.

// Máš:

const profile = {
  name: "Samuel",
  contact: {
    email: "samuel@example.com",
  },
};

// Chceme získať email používateľa.

// Ale zároveň môže byť contact neexistujúci.

// Vytvor:

// const email = ...

// tak, aby:

// ak contact existuje → dostaneš email
// ak contact neexistuje → program nespadne s errorom, ale výsledkom bude undefined

// Podmienky:

// použi optional chaining ?.
// žiadny if
// žiadny ternary
// žiadny try/catch

const email = profile?.contact?.email;

console.log(email);

// ?. → bezpečne sa dostaň hlbšie
// ?? → ak výsledok je null/undefined, použi náhradu

// =================================================================================

// Úloha 21 — Optional Chaining

// Máš:

const company = {
  name: "TechCorp",
  address: {
    city: "Bratislava",
    details: {
      street: "Main Street",
      number: 15,
    },
  },
};

// Vytvor premennú streetNumber, ktorá získa číslo ulice.

// Ale pozor: details nemusí existovať.

// Ak existuje:

// 15

// Ak details neexistuje:

// undefined

// Podmienky:

// použi ?.
// žiadny if
// žiadny ternary
// žiadny ??

const streetNumber = company?.address?.details?.number;

console.log(streetNumber);

// =================================================================================

// Úloha 22 — Nullish Coalescing ??

// Máš:

const username = null;

// Vytvor:

// ktoré bude obsahovať:

// Guest

// ak je username null alebo undefined.

// Ak zmeníš:

// const username = "Samuel";

// výsledok má byť:

// Samuel

// Podmienky:

// použi ??
// žiadny if
// žiadny ternary

const createdJS = username ?? "Guest";

console.log(createdJS);

// =================================================================================

// Úloha 23 — ?? + ?.

// Teraz ich spojíme.

// Máš:

const account = {
  profile: {
    name: "Samuel",
  },
};

// Vytvor displayName, ktorý:

// zobrazí meno, ak existuje
// ak profile alebo name neexistuje, použije "Guest"

// Teda:

// account → "Samuel"

// ale keby bolo:

// const account = {};

// tak:

// account → "Guest"

// Použi ?. aj ??.

// Žiadny if ani ternary.

const displayName = account?.profile?.name ?? "Guest";

console.log(displayName);

// =================================================================================

// Úloha 24 — Immutability + Spread Operator

// Máš:

const fruits = ["apple", "banana", "orange"];

// Chceme vytvoriť updatedFruits, ktoré bude obsahovať:

// ["apple", "banana", "orange", "mango"]

// Ale nesmieš zmeniť pôvodné fruits pole.

// Podmienky:

// použi spread operator ...
// vytvor nové pole
// nepouži push()

// A potom si môžeš overiť:

// console.log(fruits);
// console.log(updatedFruits);

// Pôvodné fruits musí zostať nezmenené.

const updatedFruits = [...fruits, "mango"];

console.log(fruits);
console.log(updatedFruits);

// =================================================================================

// Úloha 25 — Immutability + Spread Operator

// Teraz nechceme pridať, ale zmeniť existujúcu hodnotu.

// Máš:

const userProfile = {
  name: "Samuel",
  age: 40,
  city: "Bratislava",
};

// Vytvor updatedProfile, kde bude vek 41, pričom:

// pôvodný profile musí zostať nezmenený
// použi spread operator
// nepouži priamu mutáciu typu profile.age = 41

// Výsledok:

// {
//   name: "Samuel",
//   age: 41,
//   city: "Bratislava"
// }

const updatedProfile = { ...userProfile, age: 41 };

console.log(userProfile);
console.log(updatedProfile);

// =================================================================================

// Úloha 26 — Immutability + Array + map()

// Máš:

const shoppingList = [
  { item: "Milk", purchased: false },
  { item: "Bread", purchased: true },
  { item: "Eggs", purchased: false },
];

// Chceme vytvoriť updatedShoppingList, kde bude Milk označené ako purchased (true).

// Výsledok:

// [
//   { item: "Milk", purchased: true },
//   { item: "Bread", purchased: true },
//   { item: "Eggs", purchased: false },
// ]

// Podmienky:

// použi map()
// použi spread operator
// pôvodné shoppingList nesmieš zmeniť
// žiadny if
// žiadny for

const updatedShoppingList = shoppingList.map((product) =>
  // objekt ktory chceme zmenit
  product.item === "Milk"
    ? // vytvorime novy objekt, a zmenime potrebne properties
      { ...product, purchased: true }
    : // ostatne produkty nechame nezmenene.
      product,
);

console.log(shoppingList);
console.log(updatedShoppingList);
// console.log("what ", newVar);

// =================================================================================

// Úloha 27 — Immutable update

// Máš:

const users = [
  { name: "Peter", online: false },
  { name: "Martin", online: true },
  { name: "Lucia", online: false },
];

// Chceme vytvoriť updatedUsers, v ktorom bude Lucia nastavená na online: true.

// Pôvodný users musí zostať nezmenený.

// Výsledok:

// [
//   { name: "Peter", online: false },
//   { name: "Martin", online: true },
//   { name: "Lucia", online: true },
// ]

// Podmienky:

// map()
// spread operator ...
// žiadna mutácia
// žiadny if

const updatedUsers = users.map((user) =>
  user.name === "Lucia" ? { ...user, online: true } : user,
);

console.log(users);
console.log(updatedUsers);

// =================================================================================

// Úloha 28 — Immutable delete

// Teraz opačná operácia: chceme niečo odstrániť.

// Máš:

const playlists = [
  { name: "Workout", songs: 25 },
  { name: "Chill", songs: 18 },
  { name: "Coding", songs: 32 },
];

// Vytvor remainingPlaylists, ktoré bude obsahovať všetky playlisty okrem "Chill".

// Výsledok:

// [
//   { name: "Workout", songs: 25 },
//   { name: "Coding", songs: 32 },
// ]

// Podmienky:

// použi filter()
// pôvodné playlists sa nesmie zmeniť
// žiadny if
// žiadny for

const remainingPlaylists = playlists.filter(
  (playlist) => !(playlist.name === "Chill"),
  // citatelnejsie: playlist.name !== "Chill"
);

console.log(playlists);
console.log(remainingPlaylists);

// =================================================================================

// Úloha 29 — kombinácia filter() + map()

// Teraz už trochu reálnejšia situácia.

// Máš:

const productsHW = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 40, inStock: true },
  { name: "Monitor", price: 350, inStock: false },
  { name: "Keyboard", price: 80, inStock: true },
];

// Chceme vytvoriť availableProductNames, ktoré bude obsahovať názvy iba produktov, ktoré sú na sklade.

// Výsledok:

// ["Laptop", "Mouse", "Keyboard"]

// Použi:

// filter()
// map()

// Žiadny if, for ani reduce().

const availableProductNames = productsHW
  .filter((product) => product.inStock === true)
  .map((item) => item.name);

console.log(availableProductNames);

// =================================================================================

// Úloha 30 — find() + optional chaining

// Máš:

const employees30 = [
  { name: "Peter", role: "Developer" },
  { name: "Martin", role: "Designer" },
  { name: "Lucia", role: "Manager" },
];

// Chceme nájsť zamestnanca s rolou "Designer" a dostať jeho meno.

// Vytvor:

// const designerName = ...

// Výsledok:

// Martin

// Bonus: ak by žiadny Designer neexistoval, nech výsledok nebude error.

// Použi:

// find()
// ?.

// Žiadny if, ternary ani filter().

// ?. — dá sa použiť aj na výsledok funkcie, nielen na obyčajnú premennú.

const designerName = employees30.find(
  (employee) => employee.role === "Designer",
)?.name; // <------ chceme bezpecne pristupit k properties ".name" aj v pripade ze find() vrati "undefined"

console.log(designerName);

// =================================================================================

// Úloha 31 — Promise

// Predstav si, že máš funkciu, ktorá simuluje načítanie dát zo servera:

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Samuel", age: 40 });
    }, 1000);
  });
};

// Tvoja úloha:

// Zavolaj getUser() a vypíš meno používateľa do konzoly.

// Výsledok po približne 1 sekunde:

// Samuel

// Podmienky
// použi .then()
// zatiaľ nepoužívaj async/await
// žiadny if
// musíš pracovať s hodnotou, ktorú Promise vyrieši

getUser()
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.log(error);
  });

// =================================================================================

// Úloha 32 — Promise + .then()

// Máš:

const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "MacBook",
        price: 1500,
      });
    }, 1000);
  });
};

// Tvoja úloha:

// Zavolaj getProduct() a vypíš do konzoly iba cenu produktu.

// Výsledok po 1 sekunde:

// 1500

// Použi:

// getProduct()
// .then()

getProduct().then((data) => console.log(data.price));

// =================================================================================

// Úloha 32 — Promise chaining

// Máš:

const getUsername = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Samuel");
    }, 1000);
  });
};

// Chcem, aby si:

// zavolal getUsername()
// v prvom .then() dostal "Samuel"
// zmenil ho na "Hello, Samuel"
// v druhom .then() vypísal výsledok

// Výsledok:

// Hello, Samuel

// 👉 Dôležité: musíš použiť dva .then() za sebou.

getUsername()
  .then((data) => `Hello, ${data}`)
  .then((updData) => console.log(updData));

// =================================================================================

//   Úloha 33 — async/await

// Teraz presne tú istú myšlienku spravíme pomocou async/await.

// Máš:

const getScore = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(95);
    }, 1000);
  });
};

// Napíš async funkciu showScore, ktorá:

// počká na getScore()
// uloží výsledok do premennej
// vypíše:
// Score: 95

// Podmienky:

// async
// await
// žiadny .then()
// žiadny if

const showScore = async () => {
  const score = await getScore();

  console.log(`Score: ${score}`);
};

showScore();
