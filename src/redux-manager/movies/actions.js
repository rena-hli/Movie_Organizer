import { GET_MOVIE, SET_MOVIE } from "../constants";

export const getMovieAction = (movie) => ({ type: GET_MOVIE, payload: movie });
export const setMovieAction = (id) => ({
  type: SET_MOVIE,
  payload: id,
});
