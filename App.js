import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './client/screens/LoginScreen';
import HomeScreen from './client/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
