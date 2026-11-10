// We are passing function props from Timer component
const TimerControls = ({ isRunning, onToggleTimer, onResetTimer }) => {
  return (
    <>
      <button
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
