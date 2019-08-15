import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { withRouter } from 'react-router'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { drawerList }  from '../../constants'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  avatar: {
    width: 60,
    height: 60
  },
}))

const renderDrawerContent = (
  classes,
  user,
  history,
) => (
  <>
    <div className={classes.toolbar} />
    {user && (
      <>
        <div className="drawer-account-container">
          {user.avatar
            ? <Avatar alt="avatar" src={user.avatar} className={classes.avatar} />
            : <AccountCircleIcon className={classes.avatar} />
          }
          {user.full_name &&
            <Typography variant="h6">
              {user.full_name}
            </Typography>
          }
        </div>
        <Divider />
      </>
    )}
    <List>
      {drawerList.map(({ href, icon, name }, index) => (
        <ListItem
          button
          onClick={() => history.push(href)}
          selected={history.location.pathname === href}
          key={index}
        >
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </>
)

const CustomDrawer = props => {
  const {
    history,
    user,
    drawerOpened,
    toggleDrawer,
  } = props
  const classes = useStyles()

  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          {renderDrawerContent(classes, user, history)}
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="temporary"
          open={drawerOpened}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
        >
          {renderDrawerContent(classes, user, history)}
        </Drawer>
      </Hidden>
    </>
  )
}

export default withRouter(CustomDrawer)
