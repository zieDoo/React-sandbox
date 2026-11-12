import { useEffect, useRef } from "react";

// We are passing function  props from Timer component
const TimerControls = ({ isRunning, onToggleTimer, onResetTimer }) => {
  // We create a useRef
  const startButtonRef = useRef(null);

  // Add useEffect with check if element (button) exists and if it does, focus it.
  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus(); // we call a focus() method on our element.
    }
  }, []); // we use empty dependancy array, because we want to run on mount
  // We are not watching anything else.

  return (
    <>
      <button
        // We add a 'ref' attribute to start button
        ref={startButtonRef}
        onClick={onToggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* Reset button */}
      <button
        onClick={onResetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
