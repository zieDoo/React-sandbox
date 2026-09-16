import { useState } from "react";
import Star from "./Star";

// Now we add a submit button and modal component. When rating is submitted, modal component pops up.
const Rating = ({
  heading = "Rate your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Add useState hook to monitor 'submitted' state
  const [submitted, setSubmitted] = useState(false);

  // We add handleSubmit function
  // We make sure if rating is not a zero (rating is there).
  // So, if rating is greater than 0, then we want to set setSubmitted to true.
  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      // only want this to show if submitted is true. so if submitted is true,
      then Im just gona use double ampersand && (ternary can be used as well)
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      {/* Here we add a button with our CSS style */}
      <button
        className="submit-btn" // adding style from our CSS
        onClick={handleSubmit} // call function with onClick handler
        disabled={rating === 0} // Button is disabled if there is no rating
      >
        Submit
      </button>
    </div>
  );
};

export default Rating;
