// We put modal to our own component.

// 1) - For the Modal component, we want to know if it is open or not. So we use prop: 'isOpen'
// 2) - Then we want function, which will call 'closeModal' from Rating. Because, closeModal function has to stay in Rating component.
// It is using rating component state. So if we call 'onClose' function, it will call 'closeModal'.
// 3) - Last prop we need to have is rating itself:

const Modal = ({ isOpen, onClose, rating }) => {
  // Now, we checks here instead of in the rating:
  // If is not isOpen, return null.
  // If we return a null from React component, it is just show nothing.

  if (!isOpen) return null;

  // And rest we use from Rating for modal part.
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You</h2>
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        {/* And we replace 'closeModal' with 'onClose' as closeModal is no longer applies here */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
