import { takeLatest, call, all, put } from 'redux-saga/effects'
import request from 'utils/request'
import handleError from 'utils/handleError'
import actionTypes from './actionTypes'

function* getUsers(action) {
  try {
    const response = yield call(
      request.get,
      `/users?${action.searchParams}`,
    )

    yield put({
      type: actionTypes.GET_USERS_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    yield call(handleError, error.response, action)
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(actionTypes.GET_USERS_REQUEST, getUsers),
  ])
}
