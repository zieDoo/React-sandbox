import { useState } from "react";
import Star from "./Star";

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
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star} // we have to put a key, to fix React warning for missing key for each child
            star={star} // passing star itself from map method.
            // We need to have acces to rating and hover variables. (to our states)
            // This is common: we have state from one component (rating/hover) those are state we create them with useStsate  hook. // you pass them into the child component as the prop. So that you can them acces it from within this child component:

            rating={rating}
            hover={hover}
            color={color}
          />
          // <span
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)} // back to original state
          //   key={star}
          //   className="star"
          //   style={{
          //     color: star <= (hover || rating) ? color : "#ccc",
          //   }}
          // >
          //   {"\u2605"}
          // </span>
        ))}
      </div>

      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
