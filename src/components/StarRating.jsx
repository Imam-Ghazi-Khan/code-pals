import React, { useState } from "react";

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="px-4">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleClick(value)}
          style={{ cursor: "pointer" }}
        >
          {value <= rating ? <p className="inline">⭐</p> : <p className="inline text-xl">☆</p>}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
