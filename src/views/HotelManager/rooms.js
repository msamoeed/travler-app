

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    Typography,
    Paper,
    Link,


    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
// Picker


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


export default function RoomsScreen() {
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
                    <Tab label="Rooms" {...a11yProps(0)} />
                    <Tab label="Add New Room" {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={classes.root}>
                    <Grid>
                        <CardHotel hotelName={"Booked"} roomNumber={"506"} date={"25 December 2021"} >


                        </CardHotel>
                        <CardHotel hotelName={"Available"} roomNumber={"506"} date={"25 December 2021"} >


                        </CardHotel>
                        <CardHotel hotelName={"Booked"} roomNumber={"506"} date={"25 December 2021"} >


                        </CardHotel>
                        <CardHotel hotelName={"Booked"} roomNumber={"506"} date={"25 December 2021"} >


                        </CardHotel>
                    </Grid>


                </div>
            </TabPanel>

            <TabPanel value={value} index={1}>

                <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
                    <CssBaseline />
                    <Typography variant="h4" align="center" component="h1" gutterBottom>
                        Add Rooms
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
                                                label="Description"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field
                                                name="email"
                                                fullWidth
                                                required
                                                component={TextField}
                                                type="email"
                                                label="Number"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field
                                                name="email"
                                                fullWidth
                                                required
                                                component={TextField}
                                                type="email"
                                                label="Type"
                                            />
                                        </Grid>


                                        <Grid item xs={12}>
                                            <Field
                                                fullWidth
                                                name="city"
                                                component={Select}
                                                label="Beds"
                                                formControlProps={{ fullWidth: true }}
                                            >
                                                <MenuItem value="1">1</MenuItem>
                                                <MenuItem value="2">2</MenuItem>

                                            </Field>
                                        </Grid>


                                        <Grid item xs={12}>
                                            <Field
                                                name="email"
                                                fullWidth
                                                required
                                                component={TextField}
                                                type="email"
                                                label="Price"
                                            />
                                        </Grid>



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



