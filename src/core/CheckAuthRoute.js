import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const CheckAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const user = localStorage.getItem('user')

      if (user) {
        return <Component {...props} />
      }

      return <Redirect to="/" />
    }}
  />
)

export default CheckAuthRoute
