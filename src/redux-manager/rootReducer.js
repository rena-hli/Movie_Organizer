import { combineReducers } from "redux";
import movieReducer from "./movies/reducer";
import favoriteReducer from "./movie-item/reducer";

const rootReducer = combineReducers({ movieReducer, favoriteReducer });

export default rootReducer;
