import * as MaterialIcons from '@material-ui/icons'

import LoginScreen from '../Login/login'
import React, { PureComponent } from 'react'
import Events from './events'
import Bookings from './bookings'
const NavData = [
  {
    name: 'Events',
    path: '/eventManager/home',
    icon: <MaterialIcons.EventNote />,
    className: 'nav-text',
    component: <Events />
  },

  {
    name: 'Bookings',
    path: '/eventManager/bookings',
    icon: <MaterialIcons.List />,
    className: 'nav-text',
    component: <Bookings />
  },

  {
    name: 'Logout',
    path: '/login',
    icon: <MaterialIcons.ExitToApp />,
    className: 'nav-text',
    component: <LoginScreen />
  }
]

export default NavData
