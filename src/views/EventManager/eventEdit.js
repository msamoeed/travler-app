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
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import PropTypes from 'prop-types'

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Add'

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

export default function EditEventScreen ({ eventID, name, address, city }) {
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

  function editEvent (values, eventID) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    console.log(values)
    console.log(localStorage.getItem('uid'))
    var putData = {
      name: values.name,
      address: values.address,
      city: values.city,
      eventManager: localStorage.getItem('uid'),
      images: [
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      ]
    }
    axios
      .put('http://localhost:5556/editEvent/' + eventID, putData, headers)

      .then(function (response) {
        console.log(response.data._id)
        if (response.status == 200) {
          alert('Table Edited!')
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
        Edit Event
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
                    name='name'
                    component={TextField}
                    type='text'
                    defaultValue={name}
                    label='Name'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name='address'
                    fullWidth
                    required
                    component={TextField}
                    type='text'
                    defaultValue={address}
                    label='Address'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name='city'
                    component={Select}
                    defaultValue={city}
                    label='City'
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value='Islamabad'>Islamabad</MenuItem>
                    <MenuItem value='Peshawar'>Peshawar</MenuItem>
                    <MenuItem value='Karachi'>Karachi</MenuItem>
                    <MenuItem value='Lahore'>Lahore</MenuItem>
                    <MenuItem value='Gilgit'>Gilgit</MenuItem>
                  </Field>
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
                    onClick={() => {
                      editEvent(values, eventID)
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
  )
}
