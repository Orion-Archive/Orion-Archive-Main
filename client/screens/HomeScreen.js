import React, { useState, useReducer } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

function HomeScreen(props) {
  const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })

  const [markerList, dispatch] = useReducer((markerList, { type, newPin }) => {
      switch (type) {
        case "addPin":
          return [...markerList, newPin];
        case "removePin":
          return markerList.filter((pin) => pin != newPin);
        default:
          return markerList;
      }
    }, [{
      coordinate:{ latitude: 52.5200066, longitude: 13.404954 },
      title:`LAFE`,
      description:`Here lies a park.`,
      pinColor:'green'
    }]);

  const [newPinInput, setNewPinInput] = useState('');
  
  return (
    <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        region={region}
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
      
        <Button onPress={() => dispatch({ 
          type: "addPin", 
          value: {
            coordinate:{ latitude: region.latitude, longitude: region.longitude },
            title:`LAFE`,
            description:`Here lies a park.`,
            pinColor:'green'
          } 
        })}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      
    </MapView>
  );
}

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				provider={PROVIDER_GOOGLE}
				showsUserLocation
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		);
	}
}
export default HomeScreen;
