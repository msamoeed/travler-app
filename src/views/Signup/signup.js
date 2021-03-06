import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Container from '@material-ui/core/Container'

import logo from '../../assets/logos/logo_transparent.png'

import { hist } from '../../App'
const axios = require('axios')

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  sideLogo: {
    height: 150,
    width: 180
  }
}))

function signUpHotelManager (email, password, address, name, type) {
  var url = ''
  var path = ''

  if (type == 10) {
    url = 'http://localhost:5556/tourist/reg'
    path = '/login'
  } else if (type == 20) {
    url = 'http://localhost:5556/restaurantManager/reg'
    path = '/login'
  } else if (type == 30) {
    url = 'http://localhost:5556/hotelManager/reg'
    path = '/login'
  } else if (type == 40) {
    url = 'http://localhost:5556/eventManager/reg'
    path = '/login'
  } else if (type == 50) {
    url = 'http://localhost:5556/tourManager/reg'
    path = '/login'
  } else if (type == 60) {
    url = 'http://localhost:5556/transportManager/reg'
    path = '/login'
  }

  var postData = {
    email: email,
    password: password,
    address: address,
    name: name
  }

  console.log('Asdas')
  axios
    .post(url, postData, {})
    .then(function (response) {
      console.log(response.data._id)
      if (response.status == 200) {
        localStorage.setItem('uid', response.data_id)
        hist.push(path)
      }
    })
    .catch(function (error) {
      alert(error)
    })
}

export default function SignUp () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    address: '',
    type: ''
  })

  const handleChange = event => {
    const name = event.target.name

    console.log(event.target.name)
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt='Logo' style={{ height: 200, width: 200 }} />
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='name'
                label='Name'
                value={state.name}
                onChange={handleChange}
                name='name'
                autoComplete='name'
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='address'
                label='Address'
                value={state.address}
                onChange={handleChange}
                name='address'
                autoComplete='address'
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                value={state.email}
                onChange={handleChange}
                name='email'
                autoComplete='email'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='password'
                label='Password'
                type='password'
                value={state.password}
                onChange={handleChange}
                name='password'
                autoComplete='password'
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel htmlFor='outlined-age-native-simple'>
                  Register as
                </InputLabel>
                <Select
                  native
                  value={state.type}
                  onChange={handleChange}
                  label='Login as'
                  inputProps={{
                    name: 'type',
                    id: 'outlined-age-native-simple'
                  }}
                >
                  <option aria-label='None' value='' />
                  <option value={10}>Tourist</option>
                  <option value={20}>Restaurant Manager</option>
                  <option value={30}>Hotel Manager</option>
                  <option value={40}>Event Manager</option>
                  <option value={50}>Tour Package Manager</option>
                  <option value={60}>Transport Manager</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I agree to terms and conditions.'
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={() => {
              signUpHotelManager(
                state.email,
                state.password,
                state.address,
                state.name,
                state.type
              )
            }}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  )
}
