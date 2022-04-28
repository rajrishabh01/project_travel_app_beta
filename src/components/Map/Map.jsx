import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons/LocationOnOutlined";
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js'

const Map = () => {

    const classes = useStyles();

    const coordinates = { lat:0, lng:0 }

  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyB6Q8Vhe0rNruSrk37C5_NrsN3stfI5zkE'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClic k={''}
        >

        </GoogleMapReact>
    </div>

  );
};

export default Map;
