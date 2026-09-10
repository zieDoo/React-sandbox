import { useState } from "react";

const Rating = () => {
  // format of useState. Parameter is default = 0
  // rating - name of the state, setRating - name of the function to update that piece of state.

  // For Rating
  // We get rating of the specific star
  const [rating, setRating] = useState(0);

  // For Hover
  const [hover, setHover] = useState(0);

  // to change a state, never do this: rating = 3 ---> it directly mutate the variable
  // rating = 3
  // Instead call function with new value: setRating(4)

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)} // back to original state
            key={star}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
