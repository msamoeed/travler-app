import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { Form, Field } from 'react-final-form'
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Popup from '../../components/Popup/popup'
import HotelList from './popupHotel'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import VisibilityIcon from '@material-ui/icons/Add'

import IconButton from '@material-ui/core/IconButton'
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
  FormControlLabel
} from '@material-ui/core'
// Picker

import { hist } from '../../App'
const axios = require('axios')

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const tablestyle = {
  backgroundColor: '#9229ac',
  color: 'white'
}

const TableContainerStyle = {
  height: 450,
  overflowY: 'scroll',
  overflowX: 'auto',
  display: 'inline-block'
}

const saveBtnStyle = {
  width: 770,
  backgroundColor: '#9229ac',
  color: 'white',
  textTransform: 'none'
}

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  return errors
}

function TabPanel (props) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 4,
    backgroundColor: theme.palette.background.paper
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))

export default function RoomsScreen () {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [openPopup, setOpenPopup] = React.useState(false)

  const [list, setList] = React.useState([])

  function getList () {
    return fetch(
      'http://localhost:5556/hotelrooms/' + localStorage.getItem('uid')
    ).then(data => data.json())
  }

  React.useEffect(() => {
    let mounted = true
    getList().then(items => {
      if (mounted) {
        setList(items)
      }
    })
    return () => (mounted = false)
  }, [])

  const openInPopup = item => {
    setOpenPopup(true)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Rooms' {...a11yProps(0)} />
          <Tab label='Add New Room' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.root}>
          <Row>
            <Col style={{ marginLeft: 5 }}>
              <TableContainer component={Paper} style={TableContainerStyle}>
                <Table
                  stickyHeader
                  style={{ width: '100%' }}
                  aria-label='customized table'
                >
                  <TableHead>
                    <TableRow>
                      <TableCell style={tablestyle}>Sr. No</TableCell>

                      <TableCell style={tablestyle}>Hotel ID</TableCell>
                      <TableCell style={tablestyle} align='left'>
                        Room Number
                      </TableCell>
                      <TableCell style={tablestyle} align='left'>
                        Description
                      </TableCell>
                      <TableCell style={tablestyle} align='left'>
                        Price
                      </TableCell>
                      <TableCell style={tablestyle} align='left'>
                        Beds
                      </TableCell>

                      <TableCell style={tablestyle} align='left'>
                        Status
                      </TableCell>
                      <TableCell style={tablestyle} align='left'>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((row, index) => (
                      <StyledTableRow key={row._id}>
                        <TableCell component='th' scope='row'>
                          {++index}
                        </TableCell>

                        <TableCell align='left'>{row._id}</TableCell>
                        <TableCell align='left'>{row.Number}</TableCell>
                        <TableCell align='left'>{row.description}</TableCell>

                        <TableCell align='left'>{row.price}</TableCell>
                        <TableCell align='left'>{row.beds}</TableCell>
                        <TableCell align='left'>{row.status}</TableCell>

                        <TableCell align='left'>
                          <div>
                            <IconButton
                              onClick={() => {
                                //   insertRoom(valuesSent, row._id)
                              }}
                            >
                              <VisibilityIcon
                                style={{ color: '#10b7cb', width: '18' }}
                              />
                            </IconButton>
                          </div>
                        </TableCell>
                      </StyledTableRow>
                    ))}
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
          <Typography variant='h4' align='center' component='h1' gutterBottom>
            Add Rooms
          </Typography>

          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems='flex-start' spacing={1}>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name='Description'
                        component={TextField}
                        type='text'
                        label='Description'
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name='Number'
                        fullWidth
                        required
                        component={TextField}
                        type='email'
                        label='Number'
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name='Type'
                        fullWidth
                        required
                        component={TextField}
                        type='email'
                        label='Type'
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        name='Beds'
                        component={Select}
                        label='Beds'
                        formControlProps={{ fullWidth: true }}
                      >
                        <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                      </Field>
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name='Price'
                        fullWidth
                        required
                        component={TextField}
                        type='email'
                        label='Price'
                      />
                    </Grid>

                    <div>
                      <input
                        accept='image/*'
                        className={classes.input}
                        id='icon-button-photo'
                        //    onChange={this.handleCapture}
                        type='file'
                      />
                      <label htmlFor='icon-button-photo'>
                        <IconButton color='primary' component='span'>
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </div>

                    <Grid item style={{ marginTop: 16 }}>
                      <Button
                        type='button'
                        variant='contained'
                        onClick={reset}
                        disabled={submitting || pristine}
                      >
                        Reset
                      </Button>
                    </Grid>
                    <Grid item style={{ marginTop: 16 }}>
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        disabled={submitting}
                        onClick={() => {
                          // insertRoom(values)
                          setOpenPopup(true)
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                <pre>{JSON.stringify(values, 0, 2)}</pre>

                <Popup
                  title='Select Hotel'
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
                >
                  <HotelList valuesSent={values} />
                </Popup>
              </form>
            )}
          />
        </div>
      </TabPanel>
    </div>
  )
}

const CardHotel = ({ hotelName, roomNumber, date }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {hotelName}
        </Typography>
        <Typography variant='h5' component='h2'>
          Room Number {roomNumber}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

const CardRestaurant = ({ restaurantName, date }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {restaurantName}
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
