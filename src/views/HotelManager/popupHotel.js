
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container, Row, Col,Modal } from "react-bootstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow"

import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

import { makeStyles, useTheme, withStyles, } from '@material-ui/core/styles';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Add";
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
  FormControlLabel,
} from '@material-ui/core';
// Picker



import { hist } from '../../App'
const axios = require('axios');

function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
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
    );
  }
  
 

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 4,
      backgroundColor: theme.palette.background.paper,
    },
  
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));
  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const tablestyle = {
    backgroundColor: "#9229ac",
    color: "white",
  };
  
  const TableContainerStyle = {
    height: 450,
    overflowY: "scroll",
    overflowX: "auto",
    display: "inline-block",
  };
  
  const saveBtnStyle = {
    width: 770,
    backgroundColor: "#9229ac",
    color: "white",
    textTransform: "none",
  };
  


export default function HotelListScreen({valuesSent}) {

  

    console.log("HELLO WORKDD");
       
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [list, setList] = React.useState([]);
    const { onClose, selectedValue, open } = React.useState('');
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
   
    function insertRoom(values, hotelId){

        const headers = {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
         
        }
        console.log(values);
        console.log( localStorage.getItem("uid"));
        var postData = {
          Number : values.Number,
          description : values.Description,
          price : values.Price,
          status : "Available",
          beds : values.Beds,
          type : values.Type,
          hotel : hotelId,
          hotelManager  :  localStorage.getItem("uid"),
          images : ["https://source.unsplash.com/random",
          "https://source.unsplash.com/random",
          "https://source.unsplash.com/random",
          "https://source.unsplash.com/random",
            
          ]
        }
        axios.post("http://localhost:5556/addroom", postData, headers)
      
        
            .then(function (response) {
                console.log(response.data._id);
                if (response.status == 200) {
                       alert("Hotel Created!")
                }
            })
            .catch(function (error) {
                alert(error)
            });
        }
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const bull = <span className={classes.bullet}>•</span>;
  
    function getList() {
      return fetch("http://localhost:5556/gethotelByHotelId/" + localStorage.getItem("uid"))
        .then(data => data.json())
    }
  
    React.useEffect(() => {
      let mounted = true;
      getList()
        .then(items => {
          if(mounted) {
            setList(items)
          }
        })
      return () => mounted = false;
    }, [])
  
    return (
      
           
          <Row>
            <Col style={{ marginLeft: 5 }}>
              <TableContainer component={Paper} style={TableContainerStyle}>
                <Table
                  stickyHeader
                  style={{ width: "100%" }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell style={tablestyle}>Sr. No</TableCell>
  
                      <TableCell style={tablestyle}>Hotel ID</TableCell>
                      <TableCell style={tablestyle} align="left">
                        Name
                      </TableCell>
                      <TableCell style={tablestyle} align="left">
                        City
                      </TableCell>
                      <TableCell style={tablestyle} align="left">
                        Address
                      </TableCell>
                      <TableCell style={tablestyle} align="left">
                        Manager ID
                      </TableCell>

                      <TableCell style={tablestyle} align="left">
                        Action
                      </TableCell>
                      
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((row,index) => (
                      
                      <StyledTableRow key={row._id}>
                        <TableCell component="th" scope="row">
                          {++index}
                        </TableCell>
  
                        <TableCell align="left">{row._id}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.city}</TableCell>
  
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.hotelManager}</TableCell>
                        <TableCell align="left">
                          <div>
                            <IconButton onClick={()=>{
                                insertRoom(valuesSent, row._id)
                              }}>
                              <VisibilityIcon
                                style={{ color: "#10b7cb", width: "18" }}
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
  
  
       
  
          
  
       
  
   
    );
  }