// Accepting props from Rating component
const Star = ({ star, rating, hover, color, testFunction }) => {
  return (
    <span
      // Now we can use onClick handler because <span> is HTML element and can have onClick. It is not custom component.
      // If we call this function in child component, whatever we put into function body: => {here}, in parent component,
      // it will be executed. (in our case: console.log('Test')).
      onClick={testFunction}
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
