import * as MaterialIcons from '@material-ui/icons'
import Home from './home'

import LoginScreen from '../Login/login'
import App from '../../App'
import Hotel from './hotels'
import HotelDetails from './hotelDetails'
import Restaurants from './restaurants'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Bookings from './bookings'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tours from './tours'
import AppBars from './appbar'

const NavData = [
  {
    name: 'Hotels',
    path: '/customer/hotels',
    icon: <MaterialIcons.Hotel />,
    className: 'nav-text',
    component: <Hotel />,
    appbar: <AppBars />
  },
  {
    name: 'Events',
    path: '/customer/HotelDetails',
    icon: <MaterialIcons.Event />,
    className: 'nav-text',
    component: <HotelDetails />,
    appbar: <AppBars />
  },
  {
    name: 'Tours ',
    path: '/customer/tours',
    icon: <MaterialIcons.CardGiftcard />,
    className: 'nav-text',
    component: <Tours />
  },
  {
    name: 'Restaurants',
    path: '/customer/restaurants',
    icon: <MaterialIcons.Fastfood />,
    className: 'nav-text',
    component: <Restaurants />,
    appbar: <AppBars />
  },
  {
    name: 'Bookings',
    path: '/customer/bookings',
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
