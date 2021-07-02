import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Typography,
  Paper,
  Link,
  Grid,

  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';
import { hist } from '../../App'
const axios = require('axios');




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

function cancelBooking(id){
  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
   
  }
  console.log( localStorage.getItem("uid"));
 
  axios.delete("http://localhost:5556/hotel/bookingCancel/" + id ,  headers)

  
      .then(function (response) {
          console.log(response.data._id);
          if (response.status == 200) {
                 alert("Booking Cancelled")
                
          }
      })
      .catch(function (error) {
          alert(error)
      });
}
export default function HotelBookings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [list, setList] = React.useState([]);
  const [list2, setList2] = React.useState([]);

  
  function getList() {
    return fetch("http://localhost:5556/hotel/bookings/" + localStorage.getItem("uid"))
      .then(data => data.json())
  }

  function getList2() {
    return fetch("http://localhost:5556/hotel/bookings/" + localStorage.getItem("uid"))
      .then(data => data.json())
  }
  React.useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Booked" {...a11yProps(0)} />
          
    
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.root}>
        <Grid>
        {list.map((row,index) => (
                    
                   <CardHotel hotelName={row._id}  date={row.date }  roomNumber={row.roomId}  bookingId={row._id}/>
                 
                     
                  )
                  )}
                  
          
        </Grid>


        </div>
      </TabPanel>
      
    
    </div>
  );
}


  const   CardHotel = ({hotelName, roomNumber, date, bookingId}) => {
    const classes = useStyles();

        return (
    <Card className={classes.root} variant="outlined">
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {hotelName}
      </Typography>
      <Typography variant="h5" component="h2">
        Room ID {roomNumber}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {date}
      </Typography >

      <Typography className={classes.pos} color="textSecondary">
        Muhammad Abdul Moeed
      </Typography >
     
     
    </CardContent>
    <CardActions>
      <Button size="small"    onClick={()=>{

          cancelBooking(bookingId)

      }}>Cancel Booking   
        
      
       </Button>
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







