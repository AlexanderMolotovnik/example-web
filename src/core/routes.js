import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UsersPage from 'pages/UsersPage'
import AccountPage from 'pages/AccountPage'
import CheckAuthRoute from './CheckAuthRoute'
import ScrollToTop from './ScrollToTop'

const Routes = () => (
  <ScrollToTop>
    <Switch>
      <Route
        exact
        path="/"
        component={UsersPage}
      />
      <CheckAuthRoute
        exact
        path="/account"
        component={AccountPage}
      />
    </Switch>
  </ScrollToTop>
)

export default Routes
