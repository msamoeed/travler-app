import React from "react";

import * as MaterialIcons from "@material-ui/icons";
import  UserDashboard  from "./dashboard";

import LoginScreen from '../Login/login';
import App from '../../App';


 const NavData = [
  {
    name: 'Tours',
    path: "/dashboard",
    icon: <MaterialIcons.Home />,
    className: "nav-text",
    component: <UserDashboard/>,
  },
  {
    name: 'Restaurants',
    path: "/admin/users",
    icon: <MaterialIcons.Person />,
    className: "nav-text",
  //  component: <AdminUsers />,
  },
  {
    name: 'Hotels',
    path: "/admin/trainers",
    icon: <MaterialIcons.WorkOutline />,
    className: "nav-text",
  //  component: <AdminDashboard />,
  },
  {
    name: 'Events',
    path: "/admin/trainers",
    icon: <MaterialIcons.WorkOutline />,
    className: "nav-text",
  //  component: <AdminDashboard />,
  },
  {
    name: 'Tours ',
    path: "/admin/messages",
    icon: <MaterialIcons.Message />,
    className: "nav-text",
  //  component: <AdminDashboard />,
  },
  {
    name: 'Bookings',
    path: "/admin/messages",
    icon: <MaterialIcons.Message />,
    className: "nav-text",
  //  component: <AdminDashboard />,
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