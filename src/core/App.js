import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './routes'
import store, { history } from './store'
import { theme } from './theme'
import './index.css'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store().store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
)

export default App
