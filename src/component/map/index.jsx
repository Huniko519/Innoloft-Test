import React from "react";
import { GMapify } from "g-mapify";
import "g-mapify/dist/index.css";

const Maps = ({ props }) => {
  const lat = Number(props.address.latitude);
  const lon = Number(props.address.longitude);
  const markers = [
    [
      lat,
      lon,
      `<div><img src="${props?.logo}" width="100%"/><br><h2>Company : ${props?.name}</h2><h2>Street : ${props?.address.street}</h2></div>`,
    ],
  ];
  const settings = {
    zoom: 15,
  };

  return (
    <GMapify
      appKey="AIzaSyDYeOFHzed6hIPjqlCyzxuwtWhbklCZISM"
      customMarkers={markers}
      mapOptions={settings}
      lat="50.779729"
      lon="6.100367"
      autoCenter={false}
    />
  );
};

export default Maps;
