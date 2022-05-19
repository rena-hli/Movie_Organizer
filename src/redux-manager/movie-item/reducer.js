import { ADD_FAVORITES } from "../constants";

const initialValues = {
  favorites: [],
};

const favoriteReducer = (state = initialValues, action) => {
  const doesMovieExist = state.favorites.some(
    (el) => el?.imdbID === action.payload?.imdbID
  );
  switch (action.type) {
    case ADD_FAVORITES:
      console.log("redux");
      if (doesMovieExist) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export default favoriteReducer;
