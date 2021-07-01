import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Field } from 'react-final-form'
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Add'
import Popup from '../../components/Popup/popup'

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
  FormControlLabel
} from '@material-ui/core'

const axios = require('axios')

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

const saveBtnStyle = {
  width: 770,
  backgroundColor: '#9229ac',
  color: 'white',
  textTransform: 'none'
}

export default function AddTableScreen ({ valuesSent }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [list, setList] = React.useState([])
  const { onClose, selectedValue, open } = React.useState('')
  const [openPopup, setOpenPopup] = React.useState(false)

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = value => {
    onClose(value)
  }

  const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  function insertTable (values, hotelId) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    console.log(values)
    console.log(localStorage.getItem('uid'))
    console.log(localStorage.getItem('restaurantId'))
    var postData = {
      Number: values.Number,
      description: values.Description,
      price: values.Price,
      status: 'Available',
      seats: values.seats,
      restaurant: localStorage.getItem('restaurantId'),
      restaurantManager: localStorage.getItem('uid')
    }
    axios
      .post('http://localhost:5556/addTable', postData, headers)

      .then(function (response) {
        console.log(response.data._id)
        if (response.status == 200) {
          alert('Table Added!')
        }
      })
      .catch(function (error) {
        alert(error)
      })
  }

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant='h4' align='center' component='h1' gutterBottom>
        Add Table
      </Typography>

      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        //validate={validate}
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
                    name='Status'
                    fullWidth
                    required
                    component={TextField}
                    type='email'
                    label='Status'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name='Seats'
                    component={Select}
                    label='Seats'
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value='1'>4</MenuItem>
                    <MenuItem value='2'>6</MenuItem>
                    <MenuItem value='2'>12</MenuItem>
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

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={submitting}
                    onClick={() => {
                      insertTable(values)
                      setOpenPopup(true)
                    }}
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
  )
}
