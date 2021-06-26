import React from "react";

import * as MaterialIcons from "@material-ui/icons";
import  Home from "./home";

import LoginScreen from '../Login/login';
import App from '../../App';
import Hotel from './hotels'
import HotelDetails from './hotelDetails'
import Restaurants from './restaurants';
 const NavData = [
 

  {
    name: 'Hotels',
    path: "/customer/hotels",
    icon: <MaterialIcons.WorkOutline />,
    className: "nav-text",
    component: <Hotel/>,
  },
  {
    name: 'Events',
    path: "/customer/HotelDetails",
    icon: <MaterialIcons.WorkOutline />,
    className: "nav-text",
    component: <HotelDetails/>,
  },
  {
    name: 'Tours ',
    path: "/customer/dashboard",
    icon: <MaterialIcons.Message />,
    className: "nav-text",
    component: <HotelDetails/>,
  },
    {
    name: 'Restaurants',
    path: "/customer/restaurants",
    icon: <MaterialIcons.Person />,
    className: "nav-text",
    component: <Restaurants/>,
  },
  {
    name: 'Bookings',
    path: "/customer/dashboard",
    icon: <MaterialIcons.Message />,
    className: "nav-text",
    component: <HotelDetails/>,
  },
  {
    name: "Logout",
    path: "/login",
    icon: <MaterialIcons.ExitToApp />,
    className: "nav-text",
      component: <LoginScreen />,
  },
];

export default NavData;