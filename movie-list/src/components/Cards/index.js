import React from "react";
import PropTypes from "prop-types";

export const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`http://127.0.0.1:5555/movie-list/public/assets/${movie.img.src}`}
        alt={movie.img.alt}
        width="200"
      />
      <div className="card-body">
        <h2 className="card-title">{`#${movie.ranking} - ${movie.title}  (${movie.year})`}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Distributor: ${movie.distributor}`}</li>
        <li className="list-group-item">{`Amount: ${movie.amount}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
