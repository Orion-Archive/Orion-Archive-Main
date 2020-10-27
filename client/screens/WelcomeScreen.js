import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri:
          'https://www.clipartkey.com/mpngs/m/117-1174303_orion-the-hunter-drawing-orion-drawings-illustration-orion.png',
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/4f9GncCZSVN_AnIvw3lrSL0-qhneEj41HvXKIyt6SDawU8p1W2PX0-36lHENqPd0m5TXzOiMBi3AKrB1w1QagDyenim-Lme7z9Bfq09N',
          }}
        />
        <Text>Relive Past Events</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'salmon',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'dodgerblue',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
