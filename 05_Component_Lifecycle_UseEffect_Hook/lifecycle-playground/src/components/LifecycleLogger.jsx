import { useState, useEffect } from "react";

// Now, we can use one useEffect hook to replace all three lifecycle methods.

const LifecycleLogger = () => {
  // for update we add a count state and setCount state hook
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted...");
  }, []);
  // If we want to just only Mount, we leave our dependency array empty [].
  // It means that it will run only once, when components mounts.

  // For Update we use another useEffect hook
  useEffect(() => {
    // And we dont want to run the function on Mount, so we gona do a check,
    // and make sure that count is not a zero.
    if (count > 0) {
      console.log("Component updated...", count);
    }
    // Here we need to add a 'count' to Dependency Array.
    // It saying that, if count changes, we want to run whatever function we have in our useEffect hook.
  }, [count]);

  // The downsize of the Update here is - we dont have access to the Previous State (like we have in componentDidUpdate)

  // Previous state is just for this piece of state, not whole thing (like in class for entire object)
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="logger-container">
      <h2>LifecycleLogger (Function Component)</h2>
      <p>Count: {count}</p>
      {/* We could use setCount directly, but we wanted to simulate incrementCount as Class component */}
      <button onClick={incrementCount} className="secondary-btn">
        Update
      </button>
    </div>
  );
};

export default LifecycleLogger;

// useEFFECT method
// - it takes two arguments

// 1 Argument - Function (our effect)
//      - this is the code to be executed (API calls,...)
//      - this function can optionally return another function (so called cleanup function, which works like componentWillunmount)

// 2 Argument - Dependancy Array
//     - This is an array of variables that React watches
//     - The effect will trigger again only if one of the values in this array changes.
//     - If you leave it empty [], it will run only once.
