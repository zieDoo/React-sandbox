// We set the initial state to check local storage first and then we have a use effect that's gona run whenever time changes. When time changes, it's gona update locale storage to that time.

import { useState, useRef, useEffect } from "react"; //bring useEfffect
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  const timeRef = useRef(null);

  // In our initial time state, where we had a 0, we pass a function instead of this 0.
  const [time, setTime] = useState(() => {
    // Function actively checking 'localStorage' for 'time' value, if it's there.
    // If value is not in time variable, returns 0.
    return Number(localStorage.getItem("time") || 0);
  });

  const [isRunning, setIsRunning] = useState(false);

  // We want to save the time value to localStorage whenever it updates. So we use 'useEffect'.
  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    } else {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      console.log("timeRef id: ", timeRef.current);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime(0);
    timeRef.current = null;
    // On reset, we want to clear localStorage, so we add 'removeItem' to our resetTimer.
    localStorage.removeItem("time");
  };

  return (
    <>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        onToggleTimer={toggleTimer}
        onResetTimer={resetTimer}
      />
    </>
  );
};

export default Timer;
