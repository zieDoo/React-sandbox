import Rating from "./components/Rating";
import { useState } from "react";

const Counter = () => {
  //   const [count, setCount] = useState(0);    // Our default value can be also a function. We can do something in our initial state. But we need to return our initial state value (0 in our case). And whatever we return from this, is gona be a value that is saved as default for this piece of state.
  const [count, setCount] = useState(() => {
    console.log("Init count state...");
    return 0;
  });

  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        onClick={() =>
          // We can directly pass the function to our event handler
          setCount((prevCount) => {
            console.log(prevCount);
            return prevCount + 1;
          })
        }
      >
        Increment
      </button>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Rating />
      <Counter />
    </div>
  );
};

export default App;

// you can pass a function as initial state
// you can pass a function to the setter
// you can get the previous state within that setter function
