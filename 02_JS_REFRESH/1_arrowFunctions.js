// Regular function

function getRectangleArea(width, height) {
  return width * height;
}

console.log(getRectangleArea(5, 10));

// Arrow function

const getRectangleAreaArrow = (width, height) => {
  return width * height;
};

// If we have a single expression in body of function,
// (return width * height)
// we can use an implicit return and remove it

const getRectangleAreaArrow2 = (width, height) => {
  return width * height; // <--- this is explicit return
};

const getRectangleAreaArrow3 = (width, height) => width * height;

// We can also use a console.log() or other functions

const sayHello = () => console.log("Hello");

console.log(getRectangleAreaArrow3(5, 10));
sayHello();

// Arrow Functions as CALL BACKS =========================

const numbers = [1, 2, 3, 4, 5];

// with Regular function
const double = numbers.map(function (number) {
  return number * 2;
});

console.log(double);

// Same approach with Arrow functions

const doubleArrow = numbers.map((number) => {
  return number * 2;
});

console.log(doubleArrow);

// Same with implicit return (not explicit one = without return)

const doubleArrowImplicit = numbers.map((number) => number * 3);

console.log(doubleArrowImplicit);

// ==================================================

// Differences between Regular Functions and Arrow Functions

// 1) Initialization ---

// Arrow functions = they cannot be accessed before as initialized
// Regular functions = they can be called before initialization

regular();

function regular() {
  console.log("Regular");
}

const arrow = () => console.log("Arrow");
arrow();

// 2) THIS keyword ---

// With regular functions =
// it creates a this variable that references the object that call them

const person = {
  name: "Brad",
  sayHelloRegular: function () {
    // console.log("Regular: ", this.name);
    console.log(this);
  },

  // sayHelloArrow: () => console.log("Arrow: ", this.name),
  sayHelloArrow: () => console.log(this),
};

person.sayHelloRegular(); // ---> whole object
// console.log(person.name);

// For Regular functions:
// 'this' pertains to the object that this function is in.
// If we display only 'this', we see the entire object.

person.sayHelloArrow(); // ---> {}
// For Arrow functions:
// It doesnt create a 'this' variable.
// 'This' is gonna be what ever it was beforehand, whatever it was before the function.
// In this case it will be an empty object {}.
