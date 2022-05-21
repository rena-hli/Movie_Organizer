import { takeEvery, call, select } from "redux-saga/effects";
import { SAVE_FAVORITES } from "../constants";
// import { getMovieAction } from "./action";
import { sendFavorites } from "../REST";
import { getFavSelector } from "./selector";

function* workerCart(action) {
  try {
    const moviesImdbID = [];
    const movies = yield select(getFavSelector);
    movies.forEach((el) => {
      moviesImdbID.push(el.imdbID);
    });
    const moviesId = yield call(sendFavorites, action.payload, moviesImdbID);
    console.log(moviesId);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SAVE_FAVORITES, workerCart);
}
