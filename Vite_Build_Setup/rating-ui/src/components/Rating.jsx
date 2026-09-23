import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button"; // import new Button

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
          // We know how to pass a props to a component as an ATTRIBUTE. (Like html attributes). Here attributes are: star, rating, hover, ...
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

          // But we can pass value also as a 'CHILDREN' prop.
          // It is whatever value we passing between component tags:
          //
          // <Star> Whatever Here is CHILDREN prop</Star>
        ))}
      </div>

      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}

      {/* <button
        className="submit-btn" // adding style from our CSS
        onClick={handleSubmit} // call function with onClick handler
        disabled={rating === 0} // Button is disabled if there is no rating
      >
        Submit
      </button> */}

      {/* Here we replace our button with custom Button */}

      <Button
        className="submit-btn"
        disabled={rating === 0}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {/* to get this 'Submit' text inside our Button component, we destructuring the props with 'CHILDREN' keyword  */}
      {/* Now, problem is that rest of the attributes will NOT work because they are not on regular button, but on CUSTOM button. */}

      {/* So we pass them as props to the component */}

      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
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
