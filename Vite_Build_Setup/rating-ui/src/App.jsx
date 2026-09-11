import Rating from "./components/Rating";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter: {count}</h2>
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
