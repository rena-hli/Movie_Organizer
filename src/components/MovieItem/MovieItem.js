import React from "react";
import { useDispatch } from "react-redux";
import {
  getMovieAction,
  setMovieAction,
} from "../../redux-manager/movies/actions";
import "./MovieItem.css";

function MovieItem({ title, year, poster }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(getMovieAction("please, work"));
  };

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={poster} alt={title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {title}&nbsp;({year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={addToCart}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default MovieItem;
