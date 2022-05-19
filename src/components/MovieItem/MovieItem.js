import React from "react";
import "./MovieItem.css";

function MovieItem({ Title, Year, Poster }) {
  const addToFavorites = () => {
    
  }

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={addToFavorites}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default MovieItem;
