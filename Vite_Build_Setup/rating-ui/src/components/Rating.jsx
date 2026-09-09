const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // Here we create an onClik function
  const clicked = (index) => console.log("clicked", index);

  const hovered = (direction, index) =>
    console.log("Hovered", direction, index);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          // we add function 'onClick' in our span

          // if we want to pass in an argument into our function (like index)
          // it will automatically run, because we add paretnheses ()
          // if we put just a function name in, it doesnt run right away.
          // so we dont use argument '(index)', instead we use arrow function:
          // so if we want to pass something to the function, we have to have the arrow function pointing to it.
          <span
            onClick={() => clicked(index)}
            onMouseEnter={() => hovered("Enter", index)}
            onMouseLeave={() => hovered("Leave", index)}
            key={star}
            className="star"
          >
            {/* <span onClick={clicked(index)} key={star} className="star"> This is ran right away*/}
            {/* <span onClick={clicked} key={star} className="star"> */}
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

// clicked() - this is run away.

export default Rating;

// Vanilla JS Event Handler

// Inline events - we shouldnt use it. We should use Event Listener instead.
{
  /* <button onclick="activateLasers()">Activate Lasers</button> */
}

// React Event Hanlder

// In React/JSX, we can use 'onClick' but it needs to be cammelCase.
// We need to have curly braces {} as this is dynamic and we call the function without parentheses

{
  /* <button onclick={activateLasers}>Activate Lasers</button> */
}

// There are many Events:
// onClick, onSubmit, onFocus, onMouseOver, onMouseOut, onScroll, onDoubleClick,...
