import React from "react";
import StarRating from "./StarRating";
import Texts from "./TextExpander";

const App = () => {
  const [rating, setRating] = React.useState(0);
  return (
    <div>
      <StarRating maxRating={10} onSetRating={setRating} />
      <p>The rating is {rating}</p>
      <StarRating maxRating={10} />
      <Texts />
    </div>
  );
};

export default App;
