import { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log("Component init...");
  }

  // So to do a 'site effect', like make API useCallback, when the component mounts (on many cases it is on page load), you will use: componentDidMount() method
  componentDidMount() {
    console.log("Component mounted...");
  }

  render() {
    return (
      <div className="logger-container">
        <h2>LifecycleLogger (Class Component)</h2>

        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default LifecycleLogger;

// INITIALIZATION vs MOUNT
//
// Initialization is not a part of a Lifecycle
// It is happen before any of the Lifecycle steps.

// Initialization is when component is put into memory.
// (It has nothing to do with adding to DOM)

// Mounting - is specific to mounting component to DOM

// If we want to add any 'Site Effect' (like request to API) -> you wouldnt do it in INITIALIZATION

// BUT in Initialization we do thinks like:
// - set your State
// - take your props
// - bind event handlers

// So to do a 'site effect', like make API useCallback, when the component mounts (on many cases it is on page load), you will use: componentDidMount() method
