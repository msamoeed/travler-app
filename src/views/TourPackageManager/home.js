import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Button, Drawer } from "@material-ui/core";
import { useState } from "react";
import { Menu } from "@material-ui/icons";
//import { Test } from './AdminHome.styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MediaCard from '../../components/TourCard/cardTour';
import Grid from '@material-ui/core/Grid';
import DrawerSide from '../TourPackageManager/drawer'
const drawerWidth = 240;


function TourManangerHome({  component, appbar }) {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    const classes = useStyles;
    const container = window !== undefined ? () => window().document.body : undefined;


    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(true);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    console.log(component);

    return (
        <div className={useStyles().root}>
            
            <DrawerSide>
            </DrawerSide>
            {appbar}
            {component}
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },



    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 3,
        padding: theme.spacing(6.5),
    },
}));

export default TourManangerHome;
