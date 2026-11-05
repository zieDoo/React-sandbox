// useRef gives us a way to kind a reach out of React and use methods and properties of DOM elements

// It's like how to select a DOM elements in JS with 'document.querySelector'
// So we can reach a DOM methods and properties: value, input, focus methods, classList, etc

import { useRef } from "react"; // importing useRef

const App = () => {
  // We create a reference to the input field, and we are setting an initial value to 'null'.
  const inputRef = useRef(null);

  // We can see that it gives us an object with 'current' property.
  console.log(inputRef);

  const submit = () => {
    console.log(inputRef.current); // Return actual element itself

    // And we can use many different methods and properties
    // inputRef.current.focus();
    inputRef.current.blur();
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
    inputRef.current.setAttribute("placeholder", "Updated...");
  };

  // This is how React keeps reference 'IMMUTABLE' without triggering re-renders.
  // This object (current) is stable accross re-renders. Doesnt change identity like a new object would
  // If we assign something to 'inputRef.current', react wont re-render the component.

  return (
    // Classes for better visuals
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">useRef Example</h2>

      {/* Input type with inputRef reference */}
      <input
        type="text"
        placeholder="Type something..."
        className="w-full p-2 border rounded-lg"
        // We attach a reference to our input
        ref={inputRef}
      />

      {/* Button with classes and submit function */}
      <button
        // Our onclick function
        onClick={submit}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default App;
