// to get this 'Submit' text inside our Button component, we destructuring the props with 'CHILDREN' keyword
// Now, will show text 'Submit' on the button.

// In component, we can use our props with usual way, as the button is regular button now.
const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// This component is reusable and we can use it in Modal component.
