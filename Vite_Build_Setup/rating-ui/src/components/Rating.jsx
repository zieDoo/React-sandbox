import { useState } from "react";

// We can also have a default value, if nothing is passed in props in main App.
// We added props 'color' with default value gold. Also default value for feedbackmessages.
const Rating = ({
  heading = "Rate your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

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
            // Now the gold color is comming from the class of 'active'.
            // But we want to use color passed in as props (red). So instead of using dynamic class we just use inline styling so we can use variable.

            // className={`star ${star <= (hover || rating) ? "active" : ""}`}
            className="star" // we want to keep a star class
            style={{
              // and we use inline styling
              // if star is less then and equal to hover or rating, use red color from props (red)
              // else grey color '#ccc'
              color: star <= (hover || rating) ? color : "#ccc",
            }}
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
