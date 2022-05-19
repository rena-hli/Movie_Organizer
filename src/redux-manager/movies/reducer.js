import { SET_MOVIE } from "../constants";

const initialValues = {
  movies: [],
};

const movieReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_MOVIE:
      console.log("redux");
      return { ...state, movies: action.payload };
    // case GET_MOVIE:
    //   return {
    //     ...state,
    //     movies: state.movies.filter((movie) => movie.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default movieReducer;
