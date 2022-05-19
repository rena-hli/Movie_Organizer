import { GET_MOVIE, SET_MOVIE } from "../constants";

export const getMovieAction = (search) => ({
  type: GET_MOVIE,
  payload: search,
});
export const setMovieAction = (movie) => ({
  type: SET_MOVIE,
  payload: movie,
});
