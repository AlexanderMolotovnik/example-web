import React from 'react'
import AccountIcon from '@material-ui/icons/AccountBox'
import DashboardIcon from '@material-ui/icons/Dashboard'

export const drawerList = [
  {
    href: '/',
    icon: <DashboardIcon />,
    name: 'Users',
  },
  {
    href: '/account',
    icon: <AccountIcon />,
    name: 'Account',
  },
]
