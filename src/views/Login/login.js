import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { hist } from '../../App'
import logo from '../../assets/logos/logo_transparent.png' // Tell webpack this JS file uses this image

const axios = require('axios')

function signInHotelManager (email, password, type) {
  var url = ''
  var path = ''

  console.log(email)
  console.log(password)
  console.log(type)

  if (type == 10) {
    url = 'http://localhost:5556/tourist/login'
    path = '/customer/hotels'
  } else if (type == 20) {
    url = 'http://localhost:5556/restaurantManager/login'
    path = '/restaurantManager/home'
  } else if (type == 30) {
    url = 'http://localhost:5556/hotelManager/login'
    path = '/hotelManager/hotels'
  } else if (type == 40) {
    url = 'http://localhost:5556/eventManager/login'
    path = '/eventManager/home'
  } else if (type == 50) {
    url = 'http://localhost:5556/tourManager/login'
    path = '/tourManager/packages'
  } else if (type == 60) {
    url = 'http://localhost:5556/transportManager/login'
    path = '/transportManager/home'
  }

  var postData = {
    email: email,
    password: password
  }

  axios
    .post(url, postData, {})
    .then(function (response) {
      if (response.status == 200) {
        if (response.data.length == 0) {
          alert('Email or password incorrect')
        } else {
          console.log('Hello world')
          console.log(response.data)
          if (response.data.token != null) {
            localStorage.setItem('uid', response.data.results[0]._id)
            localStorage.setItem('token', response.data.token)
          } else {
            localStorage.setItem('uid', response.data[0]._id)
          }

          console.log()
          hist.push(path)
        }
      }
    })
    .catch(function (error) {
      alert(error)
    })
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage:
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  sideLogo: {
    height: 150,
    width: 180
  }
}))

export default function SignInSide () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    type: '',
    email: '',
    password: ''
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
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={logo} alt='Logo' style={{ height: 200, width: 200 }} />

          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
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
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={state.password}
              onChange={handleChange}
            />

            <Grid item xs={12}>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel htmlFor='outlined-age-native-simple'>
                  Login as
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
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={() => {
                signInHotelManager(state.email, state.password, state.type)
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
