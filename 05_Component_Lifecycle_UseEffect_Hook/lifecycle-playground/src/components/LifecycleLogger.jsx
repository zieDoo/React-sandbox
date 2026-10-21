import { useState, useEffect } from "react";

// Now, we can use one useEffect hook to replace all three lifecycle methods.

const LifecycleLogger = () => {
  useEffect(() => {
    console.log("Component mounted...");
  }, []);
  // If we want to just only Mount, we leave our dependency array empty []. It means that it will run only once, when components mounts.

  return (
    <div className="logger-container">
      <h2>LifecycleLogger (Function Component)</h2>
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
