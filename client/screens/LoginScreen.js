import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          width: 150,
          height: 150,
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/e/e0/Orion_logo.png',
        }}
      />
      <Text style={styles.title}>Orion Archive</Text>
      <Text style={styles.signin}>Sign In</Text>
      <Button title="Hello" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // FLEX: WILL GROW VERTICALLY AND HORIZONTALLY TO TAKE UP FULL SCREEN
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
  },
  signin: {
    fontSize: 35,
  },
});

export default LoginScreen;
