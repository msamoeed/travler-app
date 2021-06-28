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
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
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

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

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


export default function HotelsScreen() {
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
          <Tab label="Hotel" {...a11yProps(0)} />
          <Tab label="Register Hotel" {...a11yProps(1)} />

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

        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
          <CssBaseline />
          <Typography variant="h4" align="center" component="h1" gutterBottom>
            Create Hotel
          </Typography>


          <Form
            onSubmit={onSubmit}
            initialValues={{ employed: true, stooge: 'larry' }}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems="flex-start" spacing={1}>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="Hotel Name"
                        component={TextField}
                        type="text"
                        label="Hotel Name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="email"
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
                                name="sauces"
                                component={Checkbox}
                                type="checkbox"
                                value="ketchup"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Restaurant"
                            control={
                              <Field
                                name="sauces"
                                component={Checkbox}
                                type="checkbox"
                                value="mustard"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Swimming Pool"
                            control={
                              <Field
                                name="sauces"
                                component={Checkbox}
                                type="checkbox"
                                value="salsa"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Mall"
                            control={
                              <Field
                                name="sauces"
                                component={Checkbox}
                                type="checkbox"
                                value="guacamole"
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
                        disabled={submitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              </form>
            )}
          />
        </div>

      </TabPanel>

    </div>
  );
}


const CardHotel = ({ hotelName, roomNumber, date }) => {
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


const CardRestaurant = ({ restaurantName, date }) => {
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







