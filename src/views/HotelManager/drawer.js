import React from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import NavData from '../HotelManager/drawerData'

import { Link } from 'react-router-dom'

import logo from '../../assets/logos/logo_transparent.png' // Tell webpack this JS file uses this image

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },

  sideLogo: {
    height: 150,
    width: 180
  },

  sideBarScheme: {
    backgroundColor: theme.palette.background.paper
  },

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const drawerWidth = 240
const classes = useStyles

export default function DrawerSide (props) {
  const { window } = 180
  const container =
    window !== undefined ? () => window().document.body : undefined

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <nav className={useStyles().drawer} aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <img src={logo} alt='Logo' className={useStyles().sideLogo} />

      <div className={useStyles().sideBarScheme}>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {NavData.map((text, index) => (
            <Link
              variant='button'
              style={{ textDecoration: 'none' }}
              to={text.path}
            >
              <ListItem>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    </nav>
  )
}
