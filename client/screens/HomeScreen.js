import React, { useState, useReducer, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

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

  const addNewPin = () => {
    const newPin = {
      coordinate:{ latitude: region.latitude, longitude: region.longitude },
      title:`LAFE2`,
      description:`Here lies a park.2`,
      pinColor:'red'
    } 
    setMarkerList([...markerList, newPin])
  }
  
  return (
    <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 52.5200066, 
          longitude: 13.404954,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
      <View style={styles.container}>
        <View>
          <TouchableOpacity 
              style={styles.addPinButton}
              onPress={() => {
                addNewPin()
                console.log(markerList)
                }
              }
              >
              <Text style={styles.buttonText}>Add Pin</Text>
              </TouchableOpacity>
          {/* <Text>Your location: {JSON.stringify(location.longitude)}, {JSON.stringify(location.latitude)}</Text> */}
        </View>
      </View>
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 0,
    height: 150,
    width: '100%',
    padding: 20,
    backgroundColor: 'purple',
    position: "absolute",
  },
  addPinButton: {
    backgroundColor: 'white',
    // width: '40%', 
    // height: '35%',
    // marginBottom: '20%',
    // marginLeft: '30%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 8,
    // position: 'relative',
  },
  buttonText: {
    color: 'black',
    alignSelf: 'center',
  }
})
export default HomeScreen;
