import Rating from "./components/Rating";

// Props - is way to pass data from a parent component to a child component.
// They are similar to attributes in HTML.

const App = () => {
  return (
    <div>
      {/* In our main App component we can put our prop called with whatever name.
  We decided to pass props called 'heading' with string. */}
      <Rating heading="How do you feel about React?" />
    </div>
  );
};

export default App;
