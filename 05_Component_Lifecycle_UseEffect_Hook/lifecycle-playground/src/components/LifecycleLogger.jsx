import { Component } from "react";

class LifecycleLogger extends Component {
  // In class component, we taking a props trough constructor
  // (not with parameters like in functional component)

  // Constructor is ran when component is INITIALIZED and we taken props here.
  constructor(props) {
    // REMEMBER: we need to call constructor of the component that we extending, "Component"
    // So we need to call function 'super()' with props
    super(props);
    console.log("Component init...");
  }

  render() {
    return (
      <div className="logger-container">
        <h2>LifecycleLogger (Class Component)</h2>
        {/* We use 'this' to access a props within a class component */}
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default LifecycleLogger;
