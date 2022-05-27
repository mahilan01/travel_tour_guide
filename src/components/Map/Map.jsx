import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <h1>hello</h1>
      <GoogleMapReact
      // bootstrapURLKeys={{ key: "AIzaSyDwYAdP0s08BJbUnt5qbq4uu8UA6IzWM40" }}
      // defaultCenter={coordinates}
      // center={coordinates}
      // defaultZoom={14}
      // margin={[50, 50, 50, 50]}
      // options={""}
      // onChange={""}
      // onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
