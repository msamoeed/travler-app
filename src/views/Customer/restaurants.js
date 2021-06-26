import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import MediaCard from '../../components/TourCard/cardTour';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;



function Restaurants(props) {


  return (
   
      

        <Grid container spacing={3}  >

          <MediaCard ></MediaCard>

          <MediaCard ></MediaCard>
          <MediaCard ></MediaCard>
          <MediaCard ></MediaCard>

          <MediaCard ></MediaCard>
          
        </Grid>

      
    // </div>
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


export default Restaurants;
