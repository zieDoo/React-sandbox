// We did a component composition and took a logic from App.jsx

import { useState, useRef } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
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
    // Calling our new Components and passing a props to them
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg text-center">
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        onToggleTimer={toggleTimer}
        onResetTimer={resetTimer}
      />
    </div>
  );
};

export default Timer;
