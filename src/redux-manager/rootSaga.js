import { all, call } from "redux-saga/effects";
import movieSaga from "./movies/saga";

function* rootSaga() {
  yield all([call(movieSaga), call(favoritesSaga)]);
}

export default rootSaga;
