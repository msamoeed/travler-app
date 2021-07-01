
import * as MaterialIcons from "@material-ui/icons";


import LoginScreen from '../Login/login';
import React, { PureComponent } from "react";
import Restaurants from './restaurants'
import Bookings from './bookings'
const NavData = [


    {
        name: 'Restaurants',
        path: "/restaurantManager/home",
        icon: <MaterialIcons.Fastfood />,
        className: "nav-text",
         component: <Restaurants/>,

    },

    {
        name: 'Bookings',
        path: "/restaurantManager/bookings",
        icon: <MaterialIcons.List />,
        className: "nav-text",
         component: <Bookings/>,
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