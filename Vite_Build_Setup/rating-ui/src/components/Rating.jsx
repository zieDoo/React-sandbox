const Rating = () => {
  // For dynamic array
  // we dont need a value so using a '_' placeholder.
  // i - is for the index
  // returning i + 1, so it just increments.
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map(
          (
            star, // use stars instead of hardcoded array with numbers.
          ) => (
            // {[1, 2, 3, 4, 5].map((star) => (
            //   <span>{star}</span> // we wan to render something base on each of these items/stars. star is 1,2,...
            // But we can use UNICODE characters: '\u2605' = star

            // !!! we have to add a key to span !!!
            <span key={star} className="star">
              {"\u2605"}
            </span> // we also add className to our span
          ),
        )}
      </div>
    </div>
  );
};

export default Rating;

// We can create a list using with map method. List in react is simply a group of items. Usually you gona render some kind of JSX output per item.

// If we creating a list in React, we need to add a key to element we rendering. otherwise we get a warning: 'Each child in a list should have a unique "key" prop.'
