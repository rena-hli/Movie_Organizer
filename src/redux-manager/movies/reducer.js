import { SET_MOVIE } from "../constants";

const initialValues = {
  movies: [],
};

const movieReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
