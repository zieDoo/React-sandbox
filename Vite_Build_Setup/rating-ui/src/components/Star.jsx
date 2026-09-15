// Accepting props from Rating component
const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverEnter,
  hoverLeave,
}) => {
  return (
    <span
      // Now we can use onClick handler because <span> is HTML element and can have onClick. It is not custom component.
      // If we call this function in child component, whatever we put into function body: => {here}, in parent component,
      // it will be executed. (in our case: console.log('Test')).

      // In our case, we dont want to run the console.log and show Test message, but we want to set a rating, so we need to pass a 'star' we are clicking on. (if we are passing something to function, we need to use arrow function, otherwise it will run automatically)
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)} // same for hover handler
      onMouseLeave={hoverLeave} // we already pass a null in parent component
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
