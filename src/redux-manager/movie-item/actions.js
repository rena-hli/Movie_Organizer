import { ADD_FAVORITES, DELETE_FAVORITES, SAVE_FAVORITES } from "../constants";

export const addFavAction = (movie) => ({
  type: ADD_FAVORITES,
  payload: movie,
});

export const deleteFavAction = (id) => ({
  type: DELETE_FAVORITES,
  payload: id,
});

export const saveFavAction = (listName) => ({
  type: SAVE_FAVORITES,
  payload: listName,
});
