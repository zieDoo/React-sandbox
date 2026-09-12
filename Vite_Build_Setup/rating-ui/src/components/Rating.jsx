import { useState } from "react";

// We can also have a default value, if nothing is passed in props in main App.
const Rating = ({ heading = "Rate your Experience" }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  return (
    <div className="rating-container">
      {/* Here we can use our props argument to have dynamic behavior*/}
      {/* And after destructuring, we can use only 'heading' */}
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)} // back to original state
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >
            {"\u2605"}
          </span>
        ))}
      </div>

      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
