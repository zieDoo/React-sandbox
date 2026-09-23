// to get this 'Submit' text inside our Button component, we destructuring the props with 'CHILDREN' keyword
// Now, will show text 'Submit' on the button.

const Button = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
