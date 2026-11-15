import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, onToggleTimer, onResetTimer }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus(); // we call a focus() method on our element.
    }
  }, []);

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
