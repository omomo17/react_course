import PropTypes from "prop-types";
import React from "react";

const App = () => {
  return (
    <div>
      <StarRating />
    </div>
  );
};

function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = React.useState(0);
  const [tmpRating, setTmpRating] = React.useState(0);

  function handleRate(rating) {
    setRating(rating);
  }

  return (
    <div>
      <div>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRate(index + 1)}
            onHoverIn={() => setTmpRating(index + 1)}
            onHoverOut={() => setTmpRating(0)}
            full={tmpRating ? tmpRating >= index + 1 : rating >= index + 1}
          />
        ))}
      </div>
      <p>{tmpRating || rating || ""}</p>
    </div>
  );
}

StarRating.propTypes = {
  maxRating: PropTypes.number,
};

function Star({ onRate, onHoverIn, onHoverOut, full }) {
  // const [isActivated, setIsActivated] = React.useState(false)
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? "★" : "☆"}
    </span>
  );
}

Star.propTypes = {
  onRate: PropTypes.func.isRequired,
  onHoverIn: PropTypes.func.isRequired,
  onHoverOut: PropTypes.func.isRequired,
  full: PropTypes.bool,
};

export default App;
