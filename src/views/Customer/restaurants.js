import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Popup from '../../components/Popup/popup'
import HotelList from '../Customer/restaurantDetails'


const drawerWidth = 240;
const axios = require('axios');

function AddtoFav(hotelid, customer) {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",

    }

    var postData = {
        restaurant: hotelid,
        tourist: customer


    }


    axios.post("http://localhost:5556/tourist/addHotelFav", postData, headers)


        .then(function (response) {
            console.log(response.data._id);
            if (response.status == 200) {
                alert("Added to Favorite!")
            }
        })
        .catch(function (error) {
            alert(error)
        });
}

function Restaurants(props) {

    const [list, setList] = React.useState([]);

    function getList() {
        return fetch("http://localhost:5556/getrestaurantsForTourManager")
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
                {list.map((row, index) => (
                    <MediaCard restaurant={row} />
                )
                )}
            </Grid>
        </div>
    );
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
        flexGrow: 3,

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

function MediaCard({ restaurant }) {
    const classes = useStyless();
    const [openPopup, setOpenPopup] = React.useState(false)


    return (
        <Box m={3} pt={5}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={restaurant.images[0]}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {restaurant.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {restaurant.address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"
                        onClick={() => {
                            setOpenPopup(true);

                        }}
                    >
                        View
                    </Button>
                    <Button size="small" color="primary"
                        onClick={() => {
                            AddtoFav(restaurant._id, localStorage.getItem("uid"),)
                        }}

                    >
                        Add to Favorite
                    </Button>
                </CardActions>
            </Card>

            <Popup
                title="Restaurant Details"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <HotelList

                    restD={restaurant}
                    restName = {restaurant.name}
                    restAddress= {restaurant.address}
                />
            </Popup>
        </Box>
    );
}

export default Restaurants;
