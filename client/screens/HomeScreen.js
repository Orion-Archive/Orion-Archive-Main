import React, { useState, useReducer, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../config/colors';
import * as Location from 'expo-location';
const functions = require('../functions')

function HomeScreen(props) {
  const [region, setRegion] = useState({
    latitude: 52.5200066,
    longitude: 13.404954,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
      coordinate: { latitude: 52.5200066, longitude: 13.404954 },
      title: `LAFE`,
      description: `Here lies a park.`,
      pinColor: 'green',
    },
  ]);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 5,
    longitudeDelta: 5,
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
        longitudeDelta: 5,
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
      coordinate: { latitude: region.latitude, longitude: region.longitude },
      title: `LAFE2`,
      description: `Here lies a park.2`,
      pinColor: 'red',
    };
    setMarkerList([...markerList, newPin]);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markerList.map((marker) => (
          <Marker
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}
      </MapView>
      <View>
        <TouchableOpacity
          style={styles.addPinButton}
          onPress={() => {
            // addNewPin();
            console.log(markerList);
            // dispatch({
            // type: "addPin",
            const newPin = {
              coordinate: {
                latitude: region.latitude,
                longitude: region.longitude,
              },
              title: `LAFE2`,
              description: `Here lies a park.2`,
              pinColor: 'red',
            };
            functions.postMarker(newPin).then((returnedPin)=> setMarkerList([...markerList, returnedPin]);
            // })
            console.log(markerList);
          }}
        >
          <Text style={styles.addPinButtonText}>Add Pin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
  },
  addPinButton: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    width: '40%',
    borderRadius: 10,
    paddingVertical: 15,
    top: 70,
  },
  addPinButtonText: {
    textAlign: 'center',
    color: colors.backgroundColor,
  },
});

export default HomeScreen;
