import { takeLatest, call, all, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import request from 'utils/request'
import handleError from 'utils/handleError'
import actionTypes from './actionTypes'

function* signIn(action) {
  try {
    const response = yield call(
      request.post,
      'auth/sign_in',
      { user: action.data } ,
    )
    const { errors } = response.data

    if (errors) {
      yield call(action.resolve, errors)
    } else {
      localStorage.setItem('user', JSON.stringify(response.data))
      request.defaults.headers.common.Authorization = `Token token=${response.data.token}, email=${response.data.email}`

      yield call(action.reject)
      yield put({
        type: actionTypes.SIGN_IN_SUCCESS,
        payload: response.data,
      })
    }
  } catch (error) {
    yield call(handleError, action, error.response)
  }
}

function* signUp(action) {
  try {
    const response = yield call(
      request.post,
      'auth/sign_up',
      { user: action.data },
    )
    const { errors } = response.data

    if (errors) {
      yield call(action.resolve, errors)
    } else {
      yield call(action.reject)
      yield put({ type: actionTypes.SIGN_UP_SUCCESS })
    }
  } catch (error) {
    yield call(handleError, action, error.response)
  }
}

function* logout(action) {
  try {
    localStorage.clear()
    yield put(push('/'))
  } catch (error) {
    yield put({
      type: actionTypes.LOGOUT_ERROR,
      error,
    })
  }
}

function* updateAccount(action) {
  try {
    const response = yield call(
      request.patch,
      `/users/${action.data.id}`,
      { user: action.data }
    )
    const { errors } = response.data

    if (errors) {
      yield call(action.resolve, errors)
    } else {
      localStorage.setItem('user', JSON.stringify(response.data))
      request.defaults.headers.common.Authorization = `Token token=${response.data.token}, email=${response.data.email}`

      yield call(action.resolve)
      yield put({
        type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
        payload: response.data,
      })
    }
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_ACCOUNT_ERROR })
    yield call(handleError, error.response, action)
  }
}

export default function* accountSaga() {
  yield all([
    takeLatest(actionTypes.UPDATE_ACCOUNT_REQUEST, updateAccount),
    takeLatest(actionTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(actionTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(actionTypes.LOGOUT, logout),
  ])
}
