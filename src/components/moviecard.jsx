import React from "react";
import Stars from "./stars";

const MovieCard = ({ movies }) => {
  return (
    <div className="display-2">
      {movies.map((e, i) => (
        <div key={i} className="card-1 ">
          <div className="card-2">{e.title}</div>
          <div className="card-body border-success">
            <img src={e.img} />
          </div>
          <div className="card-3">
            <Stars rating={e.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
