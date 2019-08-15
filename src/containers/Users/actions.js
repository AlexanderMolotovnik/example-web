import actionTypes from './actionTypes'

export const getUsersRequest = (searchParams = '') => ({
  type: actionTypes.GET_USERS_REQUEST,
  searchParams,
})
