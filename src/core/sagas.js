import { all, fork } from 'redux-saga/effects'
import usersSaga from 'containers/Users/saga'
import accountSaga from 'containers/Account/saga'

export default function* rootSaga() {
  yield all([
    fork(usersSaga),
    fork(accountSaga),
  ])
}
