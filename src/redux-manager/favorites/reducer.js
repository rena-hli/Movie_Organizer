import { ADD_FAVORITES } from "../constants";

const initialValues = {
  favorites: [],
};

const favoriteReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      console.log("redux");
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export default favoriteReducer;
