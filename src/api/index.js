import { Data } from "@react-google-maps/api";
import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": "69e42b3ea1msh38860d13166cb9fp150ddcjsn4cbe95effdaf",
        }});

    return data;
  } catch (error) {
      console.log(error);
  }
};
