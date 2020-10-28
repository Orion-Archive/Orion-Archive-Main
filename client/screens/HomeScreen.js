import React, { useState, useReducer, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
const functions = require('../functions')

function HomeScreen(props) {
  const [region, setRegion] = useState({
      latitude: 52.5200066, 
      longitude: 13.404954,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })

  // const [markerList, dispatch] = useReducer((markerList, { type, newPin }) => {
  //     switch (type) {
  //       case "addPin":
  //         return [...markerList, newPin];
  //       case "removePin":
  //         return markerList.filter((pin) => pin != newPin);
  //       default:
  //         return markerList;
  //     }
  //   }, [{
  //     coordinate:{ latitude: 52.5200066, longitude: 13.404954 },
  //     title:`LAFE`,
  //     description:`Here lies a park.`,
  //     pinColor:'green'
  //   }]);

  const [markerList, setMarkerList] = useState([
    {
      coordinate:{ latitude: 52.5200066, longitude: 13.404954 },
      title:`LAFE`,
      description:`Here lies a park.`,
      pinColor:'green'
    }
  ]);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 5,
    longitudeDelta: 5
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: parseFloat(location.coords.latitude),
        longitude: parseFloat(location.coords.longitude),
        latitudeDelta: 5,
        longitudeDelta: 5
    });
    })();
  }, []);

  /*
    var mapRef;
    const goToInitialLocation = () => {
    let initialRegion = Object.assign({}, location);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    mapRef.current.getMapRef().animateToRegion(initialRegion, 2000);
  }
  */
  
  return (
    <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        // ref={mapRef}
        showsUserLocation={true}
        initialRegion={{
          latitude: 52.5200066, 
          longitude: 13.404954,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
    >
      {markerList.map(marker => (
        <Marker
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          pinColor={marker.pinColor}
        />
      ))}
      <View
        style={{
          flexDirection: "column",
        }}>
        <View
          style={{
            height: 60,
            padding: 20,
            backgroundColor: 'white'
          }}
        >
          {/* <Text>{region.latitude} , {region.longitude}</Text> */}
          <Text>Your location: {JSON.stringify(location.longitude)}, {JSON.stringify(location.latitude)}</Text>
        </View>

        <Button 
          onPress={() => {
            console.log(markerList)
            // dispatch({ 
            // type: "addPin", 
            const newPin = {
              coordinate:{ latitude: region.latitude, longitude: region.longitude },
              title:`LAFE2`,
              description:`Here lies a park.2`,
              pinColor:'red'
            } 
            functions.postMarker(newPin).then((returnedPin) => returnedPin? setMarkerList([...markerList, returnedPin]) : alert('Error'));
            
            console.log(markerList)
            }
          }
          title="Add Pin"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{backgroundColor: "white", width: '2em', height: '1em'}}
        />

      </View>
      
    </MapView>
  );
}
export default HomeScreen;
