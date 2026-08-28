// Promise is an object that represents eventual result of an asyncronous operation.
// (For instance: if you are fetching data from an API).

// It can be one of three states:
//
// 1) Pending - Asynchronous operation hasnt finish yet.
// 2) Fullfilled - Operation succeeds or resolves.
// 3) Rejected - Where operation fails.

// Promises will be used most of the times with APIs

// Creating a promise

// function in Promise is called executor function
// it takes two parameters:
// - resolve - if we resolve or complete the promise
// - reject - if we reject the promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // waits 2 sec & resolve
    resolve("Promise Resolve");
  }, 2000);
});

// To use this Promise, there are couple different ways:
// 1) .THEN

myPromise.then((data) => {
  // data are whatever we are resolving
  console.log(data);
});

// We can do also a Reject the Promise
const myPromiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rejected");
  }, 2000);
});

// To handle the reject we use .CATCH
myPromiseReject
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Fetch API - more practical

// fetch request -> it will return a Promise
// for FETCH API - we have to have two THEN blocks
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // we get a JSON data back
  .then((data) => console.log(data)) // for FETCH API, this is where we get a data
  .catch((error) => console.log(error)); // if we get an error, we can handle it with .CATCH
// !!! If we use for example AXIOS, we dont need to have 2 .THENs

// Sync/Await
// This has to be witin a function which is Asynchronous

// Regular function would be: 'async function fetchData(){}'
const fetchData = async () => {
  // We will wait on Promise
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // We will wait on Jason data
  const data = await response.json();
  console.log(data);
};

// this fetching is the same as previous, but more compact ?
fetchData();

// To handle errors with try/catch in Async/Await

const fetchDataErr = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchDataErr();
