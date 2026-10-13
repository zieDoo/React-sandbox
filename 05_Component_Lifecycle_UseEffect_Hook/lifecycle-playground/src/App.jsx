import { useState } from "react";
import LifecycleLogger from "./components/LifecycleLogger";

function App() {
  const [showLogger, setShowLogger] = useState(false);

  return (
    <div className="container">
      <h2>React Lifecycle Playground</h2>

      {/* Toggle LifecycleLogger */}
      <button
        className="primary-btn"
        onClick={() => setShowLogger(!showLogger)}
      >
        {showLogger ? "Unmount Logger" : "Mount Logger"}
      </button>

      {/* We passing a props as regular functional component */}
      {showLogger && <LifecycleLogger message="Hello propy" />}
    </div>
  );
}
export default App;
