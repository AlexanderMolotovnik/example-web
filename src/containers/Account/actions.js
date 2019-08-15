import actionTypes from './actionTypes'

export const signInRequest = (data, resolve, reject) => ({
  type: actionTypes.SIGN_IN_REQUEST,
  data,
  resolve,
  reject,
})

export const signUpRequest = (data, resolve, reject) => ({
  type: actionTypes.SIGN_UP_REQUEST,
  data,
  resolve,
  reject,
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
})

export const updateAccountRequest = (data, resolve) => ({
  type: actionTypes.UPDATE_ACCOUNT_REQUEST,
  data,
  resolve,
})
