import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container, Row, Col, Modal } from "react-bootstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles, useTheme, withStyles, } from '@material-ui/core/styles';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Popup from '../../components/Popup/popup'
import HotelList from '../Customer/hotelDetails'

import {
  Typography,
  Paper,
  Link,
  Grid,

  CssBaseline,

  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker



import { hist } from '../../App'
const axios = require('axios');

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};


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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const tablestyle = {
  backgroundColor: "#9229ac",
  color: "white",
};

const TableContainerStyle = {
  height: 450,
  overflowY: "scroll",
  overflowX: "auto",
  display: "inline-block",
};

const saveBtnStyle = {
  width: 770,
  backgroundColor: "#9229ac",
  color: "white",
  textTransform: "none",
};



function insertHotel(values) {

  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",

  }

  console.log(localStorage.getItem("uid"));
  var postData = {
    name: values.name,
    features: values.features,
    address: values.address,
    city: values.city,
    hotelManager: localStorage.getItem("uid"),
    images: ["https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random"

    ]
  }
  axios.post("http://localhost:5556/addhotel", postData, headers)


    .then(function (response) {
      console.log(response.data._id);
      if (response.status == 200) {
        alert("Hotel Created!")
      }
    })
    .catch(function (error) {
      alert(error)
    });
}

var data;

function cancelBooking(id){
  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
   
  }
  console.log( localStorage.getItem("uid"));
 
  axios.delete("http://localhost:5556/hotel/delete/" + id ,  headers)

  
      .then(function (response) {
          console.log(response.data._id);
          if (response.status == 200) {
                 alert("Hotel Removed!")
                
          }
      })
      .catch(function (error) {
          alert(error)
      });
}

export default function HotelsScreen() {





  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { onClose, selectedValue, open } = React.useState('');
  const [openPopup, setOpenPopup] = React.useState(false)

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const bull = <span className={classes.bullet}>•</span>;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [list, setList] = React.useState([]);

  function getList() {
    return fetch("http://localhost:5556/gethotelByHotelId/" + localStorage.getItem("uid"))
      .then(data => data.json())
  }

  React.useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Hotel" {...a11yProps(0)} />
          <Tab label="Register Hotel" {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.root}>


          <Row>
            <Col style={{ marginLeft: 5 }}>
              <TableContainer component={Paper} style={TableContainerStyle}>
                <Table
                  stickyHeader
                  style={{ width: "100%" }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell style={tablestyle}>Sr. No</TableCell>

                      <TableCell style={tablestyle}>Hotel ID</TableCell>
                      <TableCell style={tablestyle} align="left">
                        Name
                      </TableCell>
                      <TableCell style={tablestyle} align="left">
                        City
                      </TableCell>
                      <TableCell style={tablestyle} align="left">
                        Address
                      </TableCell>
                      <TableCell style={tablestyle} align="left">
                        Manager ID
                      </TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {list.map((row, index) => (


                      <StyledTableRow key={row._id}>
                        <TableCell component="th" scope="row">
                          {++index}
                        </TableCell>

                        <TableCell align="left">{row._id}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.city}</TableCell>

                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.hotelManager}</TableCell>
                        <TableCell align="left">
                          <div>
                            <IconButton onClick={() => {
                              setOpenPopup(true);

                            }}>
                              <VisibilityIcon
                                style={{ color: "#10b7cb", width: "18" }}
                              />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                cancelBooking(row._id)
                              }}
                            >
                              <DeleteForeverIcon
                                style={{ color: "red", width: "18" }}
                              />
                            </IconButton>
                            <IconButton
                            // onClick={()=>{editBtn(row)}}

                           >
                              <EditIcon style={{ color: "green", width: "18" }}
                              />
                            </IconButton>
                            <Popup
                              title="Select Hotel"
                              openPopup={openPopup}
                              setOpenPopup={setOpenPopup}
                            >
                              <HotelList

                                hotelR={row}
                              />
                            </Popup>
                          </div>
                        </TableCell>
                      </StyledTableRow>
                    )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Col>
          </Row>


        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>

        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
          <CssBaseline />
          <Typography variant="h4" align="center" component="h1" gutterBottom>
            Create Hotel
          </Typography>


          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems="flex-start" spacing={1}>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="name"
                        component={TextField}
                        type="text"
                        label="Hotel Name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="address"
                        fullWidth
                        required
                        component={TextField}
                        type="email"
                        label="Address"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        name="city"
                        component={Select}
                        label="Select a City"
                        formControlProps={{ fullWidth: true }}
                      >
                        <MenuItem value="London">London</MenuItem>
                        <MenuItem value="Paris">Paris</MenuItem>
                        <MenuItem value="Budapest">
                          A city with a very long Name
                        </MenuItem>
                      </Field>
                    </Grid>

                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Features</FormLabel>
                        <FormGroup row>
                          <FormControlLabel
                            label="Gym"
                            control={
                              <Field
                                name="features"
                                component={Checkbox}
                                type="checkbox"
                                value="Gym"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Restaurant"
                            control={
                              <Field
                                name="features"
                                component={Checkbox}
                                type="checkbox"
                                value="Restaurant"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Swimming Pool"
                            control={
                              <Field
                                name="features"
                                component={Checkbox}
                                type="checkbox"
                                value="Swimming Pool"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Mall"
                            control={
                              <Field
                                name="features"
                                component={Checkbox}
                                type="checkbox"
                                value="Mall"
                              />
                            }
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>

                    <div>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-photo"
                        //    onChange={this.handleCapture}
                        type="file"
                      />
                      <label htmlFor="icon-button-photo">
                        <IconButton color="primary" component="span">
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </div>

                    <Grid item style={{ marginTop: 16 }}>
                      <Button
                        type="button"
                        variant="contained"
                        onClick={reset}
                        disabled={submitting || pristine}
                      >
                        Reset
                      </Button>
                    </Grid>
                    <Grid item style={{ marginTop: 16 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => {
                          insertHotel(values)
                        }}
                        disabled={submitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          />
        </div>

      </TabPanel>

    </div>
  );
}

// function MediaCard(name, address, images, key) {
//   const classes = useStyles();

//   return (
//       <Box m={3} pt={5    }>
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image= {images[0]}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//            {address}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           View
//         </Button>
//         <Button size="small" color="primary">
//           Add to Favorite
//         </Button>
//       </CardActions>
//     </Card>
//     </Box>
//   );
// }


