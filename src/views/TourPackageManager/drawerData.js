
import * as MaterialIcons from "@material-ui/icons";


import LoginScreen from '../Login/login';
import App from '../../App';


import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Hotel from '../TourPackageManager/hotels'
import Restaurants from '../TourPackageManager/restaurants'
import Bookings from './bookings'
const NavData = [

    {
        name: 'Hotel',
        path: "/tourManager/hotels",
        icon: <MaterialIcons.WorkOutline />,
        className: "nav-text",
        component: <Hotel/>,

    },
    {
        name: 'Restaurants',
        path: "/tourManager/restaurants",
        icon: <MaterialIcons.WorkOutline />,
        className: "nav-text",
       component: <Restaurants />,

    },

    {
        name: 'Transport',
        path: "/tourManager/transport",
        icon: <MaterialIcons.WorkOutline />,
        className: "nav-text",
    //    component: <Rooms />,

    },

    {
        name: 'Events',
        path: "/tourManager/events",
        icon: <MaterialIcons.Satellite />,
        className: "nav-text",
        component: <Bookings />,
    },

    {
        name: 'Bookings',
        path: "/tourManager/bookings",
        icon: <MaterialIcons.Satellite />,
        className: "nav-text",
        component: <Bookings />,
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