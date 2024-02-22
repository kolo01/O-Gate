import React, { useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

function MyComponent() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [mark, setMark] = useState([]);

  const containerStyle = {
    width: "555px",
    height: "400px",
  };

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    //   console.log("Votre position actuelle est :");
    setLat(crd.latitude);
    setLong(crd.longitude);
    //   console.log(`La précision est de ${crd.accuracy} mètres.`);
    let config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("local")).data.accessToken
        }`,
      },
    };
    axios
      .post(
        `http://185.98.139.246:9090/ogatemanagement-api/client/rechercherpublicationsapproximatives`,
        { latitude: crd.latitude, longitude: crd.longitude },
        config
      )
      .then((res) => setMark(res.data.donnee))
      .catch((error) => {});
  }

  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);    

  const center = {
    lat: lat,
    lng: long,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {mark.map((place)=>(
        <>
        {/* {console.log("place",place)} */}
        <MarkerF key={`${place.id}-${place.id}-${place.latitude}-${place.longitude}-`} position={{lat:place.latitude,lng:place.longitude}}/>
        </>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyComponent;
