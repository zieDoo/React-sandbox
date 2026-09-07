import Rating from "./components/Rating";

// For components we can use regular functions and also arrow functions
// (Naming convention is with capital naming)

const App = () => {
  return (
    <div>
      <Rating />
    </div>
  );
};

export default App;

// Everything in React is Component. Components are building blocks of React application.
// Component is reusable piece of code that defines how part of the user interface should look and behave. Components can be nested inside of one another as well.

// We can create multiple components in one file and then move it to separate file.
