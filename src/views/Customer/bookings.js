

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
    backgroundColor: theme.palette.background.paper,
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Hotels" {...a11yProps(0)} />
          <Tab label="Restaurants" {...a11yProps(1)} />
          <Tab label="Packages" {...a11yProps(2)} />
          <Tab label="Transport" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.root}>
        <Grid>
          <CardHotel hotelName={"Sarena Hotel"} roomNumber={"506"} date={"25 December 2021"} >


          </CardHotel>
          <CardHotel hotelName={"Sarena Hotel"} roomNumber={"506"} date={"25 December 2021"} >


</CardHotel>
<CardHotel hotelName={"Sarena Hotel"} roomNumber={"506"} date={"25 December 2021"} >


</CardHotel>
<CardHotel hotelName={"Sarena Hotel"} roomNumber={"506"} date={"25 December 2021"} >


</CardHotel>
        </Grid>


        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Grid>
          <CardRestaurant restaurantName={"Salt and Pepper"} date={"13 December 2021"} />
          <CardRestaurant restaurantName={"Salt and Pepper"} date={"13 December 2021"} />
          <CardRestaurant restaurantName={"Salt and Pepper"} date={"13 December 2021"} />
          <CardRestaurant restaurantName={"Salt and Pepper"} date={"13 December 2021"} />



         
       </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </div>
  );
}


  const   CardHotel = ({hotelName, roomNumber, date}) => {
    const classes = useStyles();

        return (
    <Card className={classes.root} variant="outlined">
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {hotelName}
      </Typography>
      <Typography variant="h5" component="h2">
        Room Number {roomNumber}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {date}
      </Typography >
     
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}


const   CardRestaurant = ({restaurantName, date}) => {
  const classes = useStyles();

      return (
  <Card className={classes.root} variant="outlined">
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {restaurantName}
    </Typography>
    
    <Typography className={classes.pos} color="textSecondary">
      {date}
    </Typography>
   
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
)
}



