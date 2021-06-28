import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const drawerWidth = 240;



function Restaurants(props) {


    return (

        <div className={useStyles().content}>

            <Grid container spacing={3}  >

                <MediaCard ></MediaCard>

                <MediaCard ></MediaCard>
                <MediaCard ></MediaCard>
                <MediaCard ></MediaCard>

                <MediaCard ></MediaCard>

            </Grid>


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

        paddingTop: 30
    },
}));

const useStyless = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  
  
  });
  
 function MediaCard() {
      const classes = useStyless();
    
      return (
          <Box m={3} pt={5    }>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.samaa.tv/wp-content/uploads/2016/12/besthotelsites-1-640x360.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Add to Package
            </Button>
          </CardActions>
        </Card>
        </Box>
      );
    }
  


export default Restaurants;
