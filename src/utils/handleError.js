import { put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

export default function* (error, action) {
  switch (error.status) {
    case 401: {
      localStorage.clear()
      yield put(push('/'))
      break
    }

    default: {
      break
    }
  }
}
