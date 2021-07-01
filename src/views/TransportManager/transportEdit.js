import React from 'react'
import { Form, Field } from 'react-final-form'
import { TextField, Select } from 'final-form-material-ui'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'

import {
  Typography,
  Paper,
  Grid,
  CssBaseline,
  MenuItem
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

export default function EditEventScreen ({
  transportID,
  type,
  address,
  city,
  price
}) {
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

  function editTransport (values, transportID) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    console.log(values)
    console.log(localStorage.getItem('uid'))
    var putData = {
      transportType: values.type,
      address: values.address,
      city: values.city,
      transportManager: localStorage.getItem('uid')
    }
    axios
      .put(
        'http://localhost:5556/editTransport/' + transportID,
        putData,
        headers
      )

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
        Edit Transport
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
                    name='type'
                    defaultValue={type}
                    component={TextField}
                    type='text'
                    label='Transport Type'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name='price'
                    defaultValue={price}
                    component={TextField}
                    type='Number'
                    label='Transport Price'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name='address'
                    fullWidth
                    required
                    defaultValue={address}
                    component={TextField}
                    type='text'
                    label='Address'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name='city'
                    component={Select}
                    defaultValue={city}
                    label={city}
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
                      editTransport(values, transportID)
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
