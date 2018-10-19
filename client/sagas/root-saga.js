import {fork} from 'redux-saga/effects';
import loadingSaga from './loading-saga';

export default function* rootSaga() {
  yield [
    fork(loadingSaga)
  ];
}
