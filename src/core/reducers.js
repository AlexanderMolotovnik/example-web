import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import usersReducer from 'containers/Users/reducer'
import accountReducer from 'containers/Account/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  users: usersReducer,
  account: accountReducer,
})
