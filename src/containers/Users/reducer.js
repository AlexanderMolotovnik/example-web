import actionTypes from './actionTypes'

const initialState = {
  pagination: {},
  usersLoading: false,
  userInvited: false,
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST: {
      return {
        ...state,
        usersLoading: true,
      }
    }

    case actionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload.users,
        pagination: action.payload.pagination,
        usersLoading: false,
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer
