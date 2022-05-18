import { combineReducers } from "redux";
import cartReducer from "./movies/reducer";

const rootReducer = combineReducers({ cartReducer });

export default rootReducer;
