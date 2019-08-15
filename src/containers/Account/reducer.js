import actionTypes from './actionTypes'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      }
    }

    case actionTypes.LOGOUT: {
      return {
        ...state,
        user: null,
      }
    }

    case actionTypes.UPDATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      }
    }

    case actionTypes.UPDATE_ACCOUNT_ERROR: {
      return {
        ...state,
        user: null,
      }
    }

    default: {
      return state
    }
  }
}

export default accountReducer
