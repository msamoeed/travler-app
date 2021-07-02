import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import DrawerSide from './drawer'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popup from '../../components/Popup/popup'
import HotelList from '../HotelManager/popupHotel'
import { Carousel } from '3d-react-carousal'
import TableCell from '@material-ui/core/TableCell'
const drawerWidth = 240;



function Tours(props) {


  const [list, setList] = React.useState([]);

  function getList() {
    return fetch("http://localhost:5556/tourPackagesAll")
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
    <div className={useStyles().content}>
      <Grid container spacing={3}  >

      {list.map((row,index) => (  
                    <MediaCard hotel={row} />     
                   )
                   )}
                   
 
   
      </Grid>
    </div>
  );
}



  
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
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {


    paddingTop: 30
  },
}));

const useStyless = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },


});

function MediaCard({hotel}) {
  const classes = useStyless();
  const [openPopup, setOpenPopup] = React.useState(false)

  return (
    <Box m={3} pt={5}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={hotel.images[0]}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {hotel.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {hotel.destinationLocation}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {hotel.pickUpcity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"
         onClick={() => {
            setOpenPopup(true)
          }}
          >
            View
          </Button>
          <Button size="small" color="primary" 
          
         
          
          >
            Book
          </Button>
        </CardActions>
        <Popup
          title="Select Event"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
        <TourDetails
            hotelR={hotel}
            type="event"
          />
        </Popup>
      </Card>
    </Box>
  );
}
const mystyle = {
    color: 'black',
    textAlign: 'center',
    paddingTop: 5
  }
  


const TourDetails = ({ hotelR }) => {
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
  
        <h2 style={mystyle}>Things To Do</h2>
        <div className={classes.featur}>
          <Grid style={mystyle}>
            {hotelR.features.map((text, index) => (
              <div className={classes.featureDiv}>{text}</div>
            ))}
          </Grid>
        </div>
  
      
        <Grid container spacing={3}></Grid>
      </div>
    )
  }

export default Tours;
