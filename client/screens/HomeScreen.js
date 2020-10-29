import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../config/colors';
import * as Location from 'expo-location';
import InputModalComponent from '../components/InputModalComponent';
import DisplayModalComponent from '../components/DisplayModalComponent';

const functions = require('../functions');

function HomeScreen(props) {
  const [currentLocation, setCurrentLocation] = useState({
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

  const [modalVisible, setModalVisible] = useState(false);

  const [displayVisible, setDisplayVisible] = useState(false);

  const toggleInputModalHandler = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDisplayModalHandler = () => {
    setDisplayVisible(!displayVisible);
  };

  const addingMarkertoMarkerList = (newMarker) => {
    setMarkerList([...markerList, newMarker]);
  };

  // useLayoutEffect
  // add all pin locations from database onto map upon initial render
  useEffect(() => {
    (async () => {
      const initialMarkerList = await functions.getMarkers();
      console.log('INITIALMARKERLIST: ', initialMarkerList);
      setMarkerList(initialMarkerList);
      console.log('MARKERLIST USEEFFECT: ', markerList);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //     }
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation({
  //       latitude: parseFloat(location.coords.latitude),
  //       longitude: parseFloat(location.coords.longitude),
  //       latitudeDelta: 5,
  //       longitudeDelta: 5,
  //     });
  //   })();
  // }, []);

  const mapRef = useRef();
  const animateToRegion = () => {
    let region = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
    mapRef.current.animateToRegion(region, 1000);
  };

  return (
    <ImageBackground
      source={require('../assets/addpin-background.png')}
      style={styles.backgroundimage}
      resizeMode="contain"
    >
      <MapView
        ref={mapRef}
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => {
          console.log(
            'CURRENT LOCATION: ',
            location.longitude,
            location.latitude
          );
          setCurrentLocation(region);
        }}
      >
        {markerList.map((marker) => (
          <Marker
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
            onPress={toggleDisplayModalHandler}
          />
        ))}
      </MapView>
      <View>
        <DisplayModalComponent
          displayVisible={displayVisible}
          toggleDisplayModalHandler={toggleDisplayModalHandler}
          toggleInputModalHandler={toggleInputModalHandler}
        />
        <InputModalComponent
          modalVisible={modalVisible}
          toggleInputModalHandler={toggleInputModalHandler}
          currentLocation={currentLocation}
          addingMarkertoMarkerList={addingMarkertoMarkerList}
        />

        <TouchableOpacity
          style={styles.addPinButton}
          onPress={() => {
            console.log('MARKERLIST: ', markerList);
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.addPinButtonText}>ADD PIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    height: '105%',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
  },
  addPinButton: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    width: '60%',
    borderRadius: 10,
    paddingVertical: 15,
    top: 25,
  },
  addPinButtonText: {
    textAlign: 'center',
    color: colors.backgroundColor,
    fontWeight: '900',
    fontSize: 20,
  },
});

export default HomeScreen;
