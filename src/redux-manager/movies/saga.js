import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_MOVIE, SET_MOVIE } from "../constants";
import { setMovieAction } from "./actions";
import { getMoviesSelector } from "./selector";
import { fetchMovies } from "../REST";

function* workerMovie(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    console.log(data);
    yield put(setMovieAction(data));
    yield select(getMoviesSelector);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherMovie() {
  yield takeEvery(GET_MOVIE, workerMovie);
}
