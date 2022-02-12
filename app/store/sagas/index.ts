/**
 *  Redux saga class init
 */
import { all, takeEvery } from 'redux-saga/effects'
import * as types from 'store/actions/types'
import loginSaga from './loginSaga'

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)])
}
