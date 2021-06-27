import React from 'react';
import { Button, Drawer } from "@material-ui/core";
import { useState } from "react";
import { Menu } from "@material-ui/icons";
//import { Test } from './AdminHome.styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';


import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
        height: 200,
        width: 150,

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },

    sideLogo: {
        height: 150,
        width: 180
    },

    sideBarScheme: {
        // backgroundColor: 'pink',

    },

    featureDiv: {
        borderRadius: 15,
        height: 35,
        width: 150,
        backgroundColor: 'red',
        color: 'white',
        paddingLeft: 150,
        marginTop: 45,
        fontSize : 18,

        textAlign: 'center',
        paddingTop: 20,
        marginTop: 25,
        alignSelf: 'center',


    },
    row: {
        paddingTop: 15,
        flexDirection: 'row',

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
        flexGrow: 1,
        padding: theme.spacing(6),
    },
}));

const drawerWidth = 240;
const classes = useStyles;

const mystyle = {
    color: "black",
    textAlign: 'center',
    paddingTop: 15
}



const AppBars = () => {
    const [mobileOpen, setMobileOpen] = React.useState(true);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const classes = useStyles()

    return (
        <AppBar position="fixed" className={useStyles().appBar}>
    <Toolbar>

        <IconButton
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
        >
            <MenuIcon />
        </IconButton>
        <div className={useStyles().search}>
            <SearchIcon />
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    </Toolbar>
</AppBar>
    )
}

export default AppBars;