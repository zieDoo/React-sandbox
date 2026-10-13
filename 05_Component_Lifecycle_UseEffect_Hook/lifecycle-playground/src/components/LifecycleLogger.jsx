import { Component } from "react";

class LifecycleLogger extends Component {
  // In class component, we taking a props trough constructor
  // (not with parameters like in functional component)

  // Constructor is ran when component is INITIALIZED and we taken props here.
  constructor(props) {
    super(props);
    console.log("Component init...");
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
