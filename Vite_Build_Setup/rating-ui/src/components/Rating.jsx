import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // to show messages
  // what to put and what dont put to the state.
  // these messages are not gona change. So we dont put them in state.
  // state is for data that is to be watched and will update the UI if it is changed.
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

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
            // we want to do a conditional styling here, so choosed star get an active css class to have golden rating. class star should be there by default. Active class is dynamic, it depends on the state. So we make className dynamic.
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
      {/* here we output our rating messages */}
      {/* if rating is 0 we dont want to show any message.
      Also we are using short circuit rendering here, if what's in the left is true, then lets show what's the right. So class feedback (we have in CSS. and show the feedbackMessages array with index where whatever rating is minus 1. Minus one because index is 0 based ). Stars starting with 1,2,3.... But messages are going from 0,1,2... */}
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
