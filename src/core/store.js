import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { logger } from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers,
)


sagaMiddleware.run(rootSaga)

export default () => ({ store })
