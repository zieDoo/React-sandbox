// There is many different ways to style your components in React.

// 1) Style Object

const Rating = () => {
  return (
    <div>
      <h2>Rate Your Experience</h2>
    </div>
  );
};

export default Rating;

// 1) Inline styling

// using 'style' tag. We have to use double curly braces {{}}. Because we are putting there a javascript not a CSS. Outter braces saying it will be JS/dynamic content. Inner braces saying it will be object.Here we using cammelCase 'textAlign' syntax because it is JS object. Usual CSS syntax is with dash: 'text-align'

// 2) Style Object
// 3) Plain CSS
// 4) CSS modules
// 5) CSS framework Tailwind
// 6) Style Components
