import { useState, useEffect } from "react";

const LifecycleLogger = () => {
  const [count, setCount] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    console.log("Component mounted...");

    // For unmount, we just need to return from the useEffect
    // So whatever we put in our return, it will run on Unmount

    // componentWillUnmount - cleanut function
    return () => {
      console.log("Component unmount...");
    };
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log("Component updated...", count);
    }
  }, [count]);

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
