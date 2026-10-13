// For class component we need to import a React Component.
import { Component } from "react";

// When we using a class, we need to extend a main Component class from React.
class LifecycleLogger extends Component {
  // In Class component, we need to add a render method and from that we can run return.
  render() {
    return (
      <div className="logger-container">
        <h2>LifecycleLogger (Class Component)</h2>
      </div>
    );
  }
}

export default LifecycleLogger;
