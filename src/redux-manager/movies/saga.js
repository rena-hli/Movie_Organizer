import { takeEvery, put, call } from "redux-saga/effects";
import { GET_MOVIE } from "../constants";
import { setMovieAction } from "./actions";
import { fetchMovies } from "../REST";

function* workerMovie(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    // console.log(data);
    yield put(setMovieAction(data.Search));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherMovie() {
  yield takeEvery(GET_MOVIE, workerMovie);
}
