import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class HomeScreen extends Component {
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
