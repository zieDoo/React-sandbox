// Optional chaining (?)
// Operator in JS that allows us to safely access nested properties of an object without having to explicitly check if each property exists.
// and short circuits the evaluation if the properties is null or undefined and if returns undefined instead of throwing an error.

// without optional chaining

const user = {
  name: "brad",
};

// console.log(user.address.city); // trying to get an property of address and it doesnt exists.
// ---> error thrown

// there are cases where we are trying to fetching data and could possible try access something thats undefined. you dont always want this error to be thrown. You just want to get "undefined"
// So we use ? - it will give us "undefined"

console.log(user.address?.city); // ---> undefined

// Nullish Coalescing Operator - "??"

// It provides a way to handle a default values for 'null' or 'undefined' values. It's similar to logical 'OR' (||) operator but it only returns the right hand side operand if the left hand is either 'null' or 'undefined'. It doesnt return the right hand for falsy values like the logical OR.

let value = 0;
let result = value ?? "Default Value";

// 'Default value' is returned - if the left side is 'null' or 'undefined' (not just falsy!)

console.log(result);

// if we have 'value = 0' (even 0 is falsy) it wont return right side 'Default value'. It just return 0. Because it is not specifically null or undefined.

// If we use logical OR

// and value is falsy at all

let value2 = "";
let result2 = value2 || "Default Value";

console.log(result2);

// if we have value which is True (not falsy), it will return left side. True value.

// it is same for ??. If value is true, left side is true, it will return left operand, TRUE.

let value3 = true;
let result3 = value3 ?? "Default Value";

console.log(result3);

// Optional chaining can be used in combination with other operators, like nullish coalescing operator. To provide a default values for missing properties.

const userB = {
  name: "Brad",
};

console.log(userB.address?.city ?? "Unknown");
// Getting Unknown, because the LEFT operand is undefined. (address is not defined and left operand of ?? is throwing an error (without ? - optional chaining) what we dont want. We want to get simply 'undefined', and I want to providing what I want ("Unknown message in this case"). For to be if it is undefined. which is just gonna be unknown.
//
// 'userB.address?.city' is from (null, undefined))
