import { makeStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Carousel } from '3d-react-carousal'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const hotelR = {
  images: [
    'https://images.unsplash.com/photo-1506015391300-4802dc74de2e',
    'https://images.unsplash.com/photo-1533127321739-d5dc53c221c8'
  ]
}

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
    width: 150,
    backgroundColor: 'red',
    color: 'white',
    paddingLeft: 150,
    marginTop: 15,
    fontSize: 18,

    textAlign: 'center',
    paddingTop: 20,
    marginTop: 25,
    alignSelf: 'center'
  },
  row: {
    paddingTop: 15,
    flexDirection: 'row'
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
  content: {
    flexGrow: 10,
    padding: theme.spacing(6)
  }
}))

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
  backgroundColor: '#539ddb',
  color: 'white'
}

const TableContainerStyle = {
  height: 600,
  overflowY: 'scroll',
  overflowX: 'auto',
  display: 'inline-block'
}

const drawerWidth = 240
const classes = useStyles

const mystyle = {
  color: 'black',
  textAlign: 'center',
  paddingTop: 5,
  paddingBottom: 15
}

let slidesImage = []

hotelR.images.map((item, index) => {
  slidesImage.push(<img src={item} alt='1' />)
})

const TransportDetails = ({
  transportID,
  transportType,
  address,
  city,
  price
}) => {
  const classes = useStyles()
  const [list, setList] = React.useState([])
  const [openPopup, setOpenPopup] = React.useState(false)

  return (
    <div className={classes.content}>
      <div>
        <h1 style={mystyle}> {transportType} </h1>
      </div>
      <div style={mystyle}>Address: {address}</div>
      <div style={mystyle}>City: {city}</div>
      <div style={mystyle}>Ticket/-: {price}</div>

      <div>
        <Carousel slides={slidesImage} autoplay={true} interval={2000} />
      </div>

      <Grid container spacing={3}></Grid>
    </div>
  )
}

export default TransportDetails
