import Toolbar from '@material-ui/core/Toolbar'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '../../components/AppBar/appbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Grid from '@material-ui/core/Grid'
import Navbar from '../../components/NavBar/navbar'
import Image from '../../assets/img/new_logo.png'
import Paper from '@material-ui/core/Paper'
import { Carousel } from '3d-react-carousal'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import * as MaterialIcons from '@material-ui/icons'
const axios = require('axios');

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  media: {
    height: 200,
    width: 150
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },

  sideLogo: {
    height: 150,
    width: 180
  },

  sideBarScheme: {
    // backgroundColor: 'pink',
  },

  featureDiv: {
    borderRadius: 15,
    height: 35,
    width: 180,
    backgroundColor: 'red',
    color: 'white',

    marginTop: 15,
    fontSize: 18,

    textAlign: 'center',
    paddingTop:10,
  
    alignSelf: 'center'
  },
  row: {
    paddingTop: 15,
    flexDirection: 'row'
  },

  featur:{
    display: 'flex',  justifyContent:'center', alignItems:'center',
  },

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  carosel:{
    width : 600
  },
  content: {
    padding: theme.spacing(25)
  }
}))

const drawerWidth = 240
const classes = useStyles

const mystyle = {
  color: 'black',
  textAlign: 'center',
  paddingTop: 5
}

function BookRoom(roomId, hotelManager, hotelId){
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
     
    }
  
    var postData = {
        hotelManager :  hotelManager,
        hotelId : hotelId,
        roomId : roomId,
        customerId : localStorage.getItem("uid")

  
  
    }
    
   
    axios.post("http://localhost:5556/tourist/bookHotel" , postData, headers)
  
  
    .then(function (response) {
      console.log(response.data._id);
      if (response.status == 200) {
        alert("Room Booked!")
      }
    })
    .catch(function (error) {
      alert(error)
    });
  }
const HotelDetails = ({ hotelR }) => {
  let slidesImage = []

  const [list, setList] = React.useState([])

  function getList () {
    return fetch(
      'http://localhost:5556/hotelroomsByHotelId/' + hotelR._id
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

  hotelR.images.map((item, index) => {
    slidesImage.push(<img src={item} alt='1' />)
  })
  const classes = useStyles()
  return (
    <div className={classes.carosel}>
      <div>
        <h1 style={mystyle}> {hotelR.name} </h1>
      </div>
<div className={classes.carosel}>


<Carousel slides={slidesImage} autoplay={true} interval={2000}  />
</div>
      

      <div style={mystyle}>{hotelR.address}</div>

      <h2 style={mystyle}>Facilities</h2>
      <div className={classes.featur}>
        <Grid style={mystyle}>
          {hotelR.features.map((text, index) => (
            <div className={classes.featureDiv}>{text}</div>
          ))}
        </Grid>
      </div>

      <div>
        <h2 style={mystyle}>Rooms</h2>

        {list.map((text, index) => (
          <MediaCard
            images={text.images[0]}
            description={text.description}
            price={text.price}
            detail={text.type}
            roomId = {text._id}
            hotelManager = {hotelR.hotelManager}
            hotelId = {hotelR._id}
          >
            {' '}
          </MediaCard>
        ))}
      </div>

      <Grid container spacing={3}></Grid>
    </div>
  )
}

function MediaCard ({ images, detail, price, description, roomId, hotelManager, hotelId }) {
  const classes = useStyles()

  return (
    <Box m={3} pt={5}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={images} title={detail} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {price} USD
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
          
          size='small' 
          color='primary'
          onClick={()=>{
                BookRoom(roomId, hotelManager, hotelId);
          }}

          >
            Book
          </Button>
          <Button size='small' color='primary'>
            Add to Favorite
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default HotelDetails
