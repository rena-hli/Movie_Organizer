import { all, call } from "redux-saga/effects";
import movieSaga from "./movies/saga";
import favoritesSaga from "./movie-item/saga";

function* rootSaga() {
  yield all([call(movieSaga), call(favoritesSaga)]);
}

export default rootSaga;
