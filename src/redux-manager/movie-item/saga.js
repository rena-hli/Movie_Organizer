import { takeEvery, put, call, select } from "redux-saga/effects";
import { SAVE_IN_FAVORITS } from "../constants";
import { getMovieAction } from "./action";
import { sendFavorites } from "../REST";
import { getFavSelector } from "./selector";

function* workerCart(action) {
  try {
    const filmsImdbID = [];
    const movies = yield select(getFavSelector);
    movies.forEach((el) => {
      filmsImdbID.push(el.imdbID);
    });
    const filmsId = yield call(sendFavorites, action.payload, filmsImdbID);
    console.log(filmsId)
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SAVE_IN_FAVORITS, workerCart);
}
