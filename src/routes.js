/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import React from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import EventIcon from '@material-ui/icons/Event';
import { Home, set_meal, Store } from "@material-ui/icons";
import trophy from "@material-ui/icons/EmojiEvents"; 
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFish } from "@fortawesome/free-solid-svg-icons";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Fish from "views/Fish/Fish.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Event from "views/Events/Event.js";
import Prize from "views/Prize/prize.js";
import Shop from "views/Shop/shop.js";


// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: Home,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Fishermen",
   
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
 
  {
    path: "/fish",
    name: "Fish",
   
    icon: BubbleChart,
    component: Fish,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Events",
   
    icon: EventIcon,
    component: Event,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Draw Winner",
   
    icon: AttachMoneyIcon,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/prizes",
    name: "Prizes",
   
    icon: trophy,
    component: Prize,
    layout: "/admin"
  },
  {
    path: "/shop",
    name: "Shop",
   
    icon: Store,
    component: Shop,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "LogOut",
   
    icon: ExitToAppIcon,
    component: NotificationsPage,
    layout: "/login"
  },
  
];

export default dashboardRoutes;
