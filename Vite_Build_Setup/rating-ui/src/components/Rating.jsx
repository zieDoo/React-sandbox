import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal"; // we import our Modal component

const Rating = ({
  heading = "Rate your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Add useState hook to monitor 'submitted' state
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  // Close modal and reset UI
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
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

      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      {/* Here we add a button with our CSS style */}
      <button
        className="submit-btn" // adding style from our CSS
        onClick={handleSubmit} // call function with onClick handler
        disabled={rating === 0} // Button is disabled if there is no rating
      >
        Submit
      </button>

      {/* And we insert our Modal component */}
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
    // 1) - isOpen - is gona pertain to the submitted state. Because if it is submitted, I click submit button, then the modal is gona be open.
    // If it is not submitted, the modal wont show, wont be open.
    // 2) With 'onClose' handler, when it's called withing the Modal component, I want to call 'closeModal'. Which will reset UI and set submitted
    // and other functions back to defaults.
    // 3) Passing a rating as well because we are using it in Modal component.
  );
};

export default Rating;

// ====================================================================================
//
// We might think why in Modal, 'isOpen' is a prop.
// We didnt set it as state for the Modal component.

// Reason: we are keeping Modal component 'STATELESS'.

// It doesnt have its own state, its just render something based on props that are passed in.
// It is called: UNIDIRECTIONAL DATA FLOW

// UNIDIRECTIONAL DATA FLOW:
//
// It folows React principle of top-down data flow, where the parent manages the state and
// children receive that stat via props.

// Rating is our main component and that's where our main state for this part of UI is.
// (In this case the only part of UI).
// This is where the states is being held and managed.

// We are not changing the states anywhere else, we are doing it here and if we need to change
// the state from the Modal, then we are calling 'onclose', which then calls the 'closeModal'
// in the main Rating component, and then changes the state.

// We have a states at the top component (Rating), and stateLESS component - UNDER IT.
// They just render based of what we pass in.
