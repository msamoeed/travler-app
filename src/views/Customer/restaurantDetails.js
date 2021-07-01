import Toolbar from '@material-ui/core/Toolbar'

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Carousel } from '3d-react-carousal'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Button from '@material-ui/core/Button'
import Popup from '../../components/Popup/popup'

import * as MaterialIcons from '@material-ui/icons'

const hotelR = {
  name: 'Mariott',
  address: 'G-8, Islamabad, Pakistan',
  city: 'Islamabad',
  images: [
    'https://images.unsplash.com/photo-1581636625147-368022204804',
    'https://images.unsplash.com/photo-1611599538835-b52a8c2af7fe',
    'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa'
  ]
}
const axios = require('axios')
function deleteTable (id) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  //console.log(localStorage.getItem('uid'))

  axios
    .delete('http://localhost:5556/deleteTable/' + id, headers)

    .then(function (response) {
      console.log(response.data._id)
      if (response.status == 200) {
        alert('Table Deleted!')
      }
    })
    .catch(function (error) {
      alert(error)
    })
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
    width : 600,
    padding: theme.spacing(5)
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
  paddingTop: 15
}

let slidesImage = []

hotelR.images.map((item, index) => {
  slidesImage.push(<img src={item} alt='1' />)
})

const RestaurantDetails = ({ restD, restName, restAddress }) => {
  const classes = useStyles()
  const [list, setList] = React.useState([])
  const [openPopup, setOpenPopup] = React.useState(false)

  function getList () {
    return fetch('http://localhost:5556/getTables/' + restD).then(data =>
      data.json()
    )
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

  return (
    <div className={classes.content}>
      <div>
        <h1 style={mystyle}> {restName} </h1>
      </div>

      <div>
        <Carousel slides={slidesImage} autoplay={true} interval={2000} />
      </div>

      <div style={mystyle}>{restAddress}</div>

      <div>
        <h2 style={mystyle}>Tables</h2>
        <Button
          type='button'
          variant='contained'
          style={{ marginLeft: 5, marginBottom: 5, backgroundColor: '#539ddb' }}
          onClick={() => {
            setOpenPopup(true)
          }}
          //disabled={submitting || pristine}
        >
           Book Table
        </Button>

        <Popup
          title='Add Table'
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          {/* <AddTablePopup restID={restD} /> */}
        </Popup>

        </div>

      <Grid container spacing={3}></Grid>
    </div>
  )
}

export default RestaurantDetails
