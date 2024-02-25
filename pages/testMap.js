import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, InfoBoxF, InfoWindow, InfoWindowF, Marker, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import { FcHome } from "react-icons/fc";

function MyComponent() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [mark, setMark] = useState([]);
  const [selected,setSelected] = useState(null)


  useEffect(()=>{
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
  
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  
    function error(err) {
      console.warn(`ERREUR (${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error,options);    
  },[])




  const containerStyle = {
    width: "555px",
    height: "400px",
  };



  const placed =[ {latitude:5.36,longitude:-3.96},{latitude:5.34,longitude:-3.94},{latitude:5.37,longitude:-3.97},]




  const center =  { 
    lat:lat,
    lng:long,
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

      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF  position={{lat:lat,lng:long}}  />
        
   
      {mark.map((place)=>(
        <>
        {console.log("place",place)}
        <MarkerF position={{lat:place.latitude,lng:place.longitude}}  />
        {selected &&(

          <InfoBoxF  position={{lat:selected.latitude,lng:selected.longitude}} zIndex={1} options={{
          pixelOffset:{
            width:0,
            height:-40,
          }
        }}
        onCloseClick={()=>setSelected("undefined")}/>
        ) }
      
        </>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyComponent;
