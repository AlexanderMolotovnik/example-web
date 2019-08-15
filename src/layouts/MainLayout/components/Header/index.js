import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import ExitIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'

const Header = ({
  showModal,
  isSignedIn,
  logout,
  toggleDrawer,
}) => (
  <AppBar position="fixed">
    <Toolbar>
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Typography variant="h6" className="app-title">
        Example
      </Typography>
      {!isSignedIn ? (
        <>
          <Button color="inherit" onClick={() => showModal('signIn')}>
            SIGN IN
          </Button>
          <Button color="inherit" onClick={() => showModal('signUp')}>
            SIGN UP
          </Button>
        </>
        ) : (
          <IconButton color="inherit" onClick={logout}>
            <ExitIcon />
          </IconButton>
        )
      }
    </Toolbar>
  </AppBar>
)

export default Header
