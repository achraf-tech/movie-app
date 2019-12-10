import React from "react";

const Stars = props => {
  let star = [];
  for (let i = 0; i < 5; i++) {
    i < props.rating ? star.push("★") : star.push("☆");
  }

  return (
    <div>
      {star.map((e, i) => (
        <span key={i} onClick={props.searchstar ? () => props.rate(i) : null}>
          {e}
        </span>
      ))}
    </div>
  );
};

export default Stars;
