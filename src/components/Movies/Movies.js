import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import { getMoviesSelector } from "../../redux-manager/movies/selector";
import "./Movies.css";

function Movies() {
  const movies = useSelector(getMoviesSelector);
  console.log(movies, "movies");
  return (
    <ul className="movies">
      {movies?.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

export default Movies;
