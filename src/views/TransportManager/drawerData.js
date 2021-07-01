import * as MaterialIcons from '@material-ui/icons'

import LoginScreen from '../Login/login'
import React, { PureComponent } from 'react'
import Transport from './transport'
import Bookings from './bookings'
const NavData = [
  {
    name: 'Transport',
    path: '/transportManager/home',
    icon: <MaterialIcons.DirectionsBus />,
    className: 'nav-text',
    component: <Transport />
  },

  {
    name: 'Bookings',
    path: '/transportManager/bookings',
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
