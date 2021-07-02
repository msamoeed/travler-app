import * as MaterialIcons from '@material-ui/icons'

import LoginScreen from '../Login/login'
import App from '../../App'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Hotel from '../TourPackageManager/hotels'
import Restaurants from '../TourPackageManager/restaurants'
import Bookings from './bookings'
import Packages from './packages'
import Transport from '../TourPackageManager/transport'
import Events from './events'
import TransportDetails from '../TransportManager/transportDetail'
const NavData = [
  {
    name: 'Packages',
    path: '/tourManager/packages',
    icon: <MaterialIcons.CardGiftcard />,
    className: 'nav-text',
    component: <Packages />
  },
  {
    name: 'Hotel',
    path: '/tourManager/hotels',
    icon: <MaterialIcons.Hotel />,
    className: 'nav-text',
    component: <Hotel />
  },
  {
    name: 'Restaurants',
    path: '/tourManager/restaurants',
    icon: <MaterialIcons.Fastfood />,
    className: 'nav-text',
    component: <Restaurants />
  },

  {
    name: 'Transport',
    path: '/tourManager/transport',
    icon: <MaterialIcons.Commute />,
    className: 'nav-text',
    component: <Transport />
  },

  {
    name: 'Events',
    path: '/tourManager/events',
    icon: <MaterialIcons.Event />,
    className: 'nav-text',
    component: <Events />
  },

  {
    name: 'Bookings',
    path: '/tourManager/bookings',
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
