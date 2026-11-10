import { useState, useRef } from "react";
import Timer from "./components/Timer";

const App = () => {
  // storing timer ID in timeRef
  const timeRef = useRef(null);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    // check if our piece of state is running
    if (isRunning) {
      // CLear interval to stop the timer. We are passing an ID (in this case timeRef)
      clearInterval(timeRef.current);
      timeRef.current = null;
    } else {
      // Start timer if it isnt running
      // setInterval is returning an ID. We put it into the ref
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // so anything what is put in {} is run every second.
      console.log("timeRef id: ", timeRef.current);
    }
    // And we call setIsRunning as we didnt start a timer anywhere. And we want to set it either true or false based on if it's running or not.
    // set it to opposite what it is.
    setIsRunning(!isRunning);
  };

  // We reset everything
  const resetTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime(0);
    timeRef.current = null;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg text-center">
      <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2>

      <button
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* Reset button */}
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Reset
      </button>
    </div>
  );
};

export default App;

// when you call a setInterval or clearInterval in JS, we are dealing with an ID that's returned. and that needs to be kept across renders but not in state.

// Why not use a regular variable instead of ref ?
// in React, function componenents, everything inside the component runs from top to bottom on every render. So if we put for example : let timerId = null and setInterval(timerId), every time that component renders, that timerId will be set back to null. And we lose that value we had before.
// With ref that value persist across state.
