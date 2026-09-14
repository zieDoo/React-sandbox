// Accepting props from Rating component
const Star = ({ star, rating, hover, color }) => {
  return (
    <span
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
