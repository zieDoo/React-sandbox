import { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log("Component init...");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted...");
  }
  // In our case, we might want to check our previous Props or State and do something based on them.
  componentDidUpdate(prevProps, prevState) {
    // We only want to console log, if the 'count' is actually updated. Making sure that they are not the same and actually Incremented.
    if (prevState.count !== this.state.count) {
      console.log("Component updated...", this.state.count);
    }
  }

  // Metoda 'componentDidUpdate(prevProps, prevState)'
  // - Metoda sa spusti okamzite po tom co sa component aktualizuje (kvoli zmene Props alebo State)
  // - Nespusta sa pri prvom vykresleni componentu.
  // - prevProps and prevState su pred aktualizaciou.

  //  Ak vnutri 'componentDidUpdate' volame 'this.setState' musime ho vzdy obalit do podmienky, ktora porovnava aktualne props/state s predchadzajucimi.
  // V opacnom pripade vznikne NEKONECNA slucka.

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="logger-container">
        <h2>LifecycleLogger (Class Component)</h2>

        <p>Count: {this.state.count}</p>

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
