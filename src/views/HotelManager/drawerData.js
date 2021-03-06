import * as MaterialIcons from '@material-ui/icons'

import LoginScreen from '../Login/login'
import App from '../../App'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import AddHotel from './hotel'
import Bookings from './bookings'
import Rooms from './rooms'
const NavData = [
  {
    name: 'Hotel',
    path: '/hotelManager/hotels',
    icon: <MaterialIcons.Hotel />,
    className: 'nav-text',
    component: <AddHotel />
  },
  {
    name: 'Rooms',
    path: '/hotelManager/rooms',
    icon: <MaterialIcons.MeetingRoom />,
    className: 'nav-text',
    component: <Rooms />
  },
  // {
  //     name: 'Rooms',
  //     path: "/hotelManager/rooms",
  //     icon: <MaterialIcons.WorkOutline />,
  //     className: "nav-text",
  //     // component: <HotelDetails/>,

  // },
  {
    name: 'Bookings',
    path: '/hotelManager/bookings',
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
