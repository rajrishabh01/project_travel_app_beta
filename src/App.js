import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState({});
  const [type, setType] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
      const filteredPlaces = places?.filter((place) => Number(place.rating) > rating);
      setFilteredPlaces(filteredPlaces);
  }, [places, rating]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces?.length ? filteredPlaces: places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            rating={rating}
            setType={setType}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
            type={type}
            places={filteredPlaces?.length ? filteredPlaces: places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
