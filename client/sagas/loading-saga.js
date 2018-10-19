import { call, takeEvery, put } from 'redux-saga/effects';
import { TRIGGER_LOADING_SAGA } from '../actions/types';
import { setLoadingDetails } from '../actions';

export const setLoader = function*(action) {
    yield put(setLoadingDetails(false));
};

export default function* loadingSaga() {
  yield takeEvery(TRIGGER_LOADING_SAGA, setLoader);
}
