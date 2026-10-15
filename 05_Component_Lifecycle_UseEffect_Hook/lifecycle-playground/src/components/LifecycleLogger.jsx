import { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log("Component init...");

    // For the Update part of the Lifecycle - we have to add piece of state as in functional component
    // It is equivalent to = const [count, setCount] = useState(0);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted...");
  }

  incrementCount() {
    console.log("Hello there");
  }

  render() {
    return (
      <div className="logger-container">
        <h2>LifecycleLogger (Class Component)</h2>
        {/* To access the state we using 'this' */}
        <p>Count: {this.state.count}</p>
        {/* To update this state we can use button with incrementCount function  */}
        {/* We using 'this' because we are using methong which is part of this class */}
        <button onClick={this.incrementCount} className="secondary-btn">
          Update
        </button>
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
