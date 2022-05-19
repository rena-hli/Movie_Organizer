import { ADD_FAVORITES } from "../constants";

export const addFavAction = (movie) => ({
  type: ADD_FAVORITES,
  payload: movie,
});
