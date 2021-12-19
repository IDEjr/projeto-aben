import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Box } from "@mui/system";

const MapView = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAu_se-xruO6NyhSV3urp7VjL7nldlRCCg",
  });

  const position ={
    lat: -30.036396015436104, 
    lng: -51.20891810291557
  }
  return (
    <Box sx={{
        height:"50vh"
    }}>
      
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        > <Marker position={position}/>
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default MapView;

//AIzaSyAu_se-xruO6NyhSV3urp7VjL7nldlRCCg
