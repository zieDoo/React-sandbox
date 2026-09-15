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
            // This is common: we have states from Rating component (rating/hover), we create them with useStsate hook. // you pass them into the child component as the prop. So that you can acces it from within this child Star component:

            rating={rating}
            hover={hover}
            color={color}
            // IMPORTANT - we cannot do an onClick and setRating on the custom component.
            // Star component is custom component and it is not an HTML tag. It doesnt know what onClick is, yet.
            // We have to describe it.

            // Lets add a test function
            // Functions can be passed to our child component as a prop as any other value.

            // And now we adjust our function body to run setRating
            // Because 'setRating' is already a function which expects a 'star' value, we can pass it directly and
            // child component call it with argument (ratingClick(star)) in our 'Star' component.

            // Also we want 'setRating' to run in file 'Rating.jsx', because that state is part of this file.
            ratingClick={setRating}
            hoverEnter={setHover} // we do same for hover
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
