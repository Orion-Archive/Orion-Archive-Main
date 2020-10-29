import React from 'react';
import { IOS_CLIENT_ID } from '@env';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
} from 'react-native';
import * as Google from 'expo-google-app-auth';

const iosClientId = IOS_CLIENT_ID;

// REMEMBER TO REQUEST ACCESS FOR EMAIL ADDRESS OR USER PROFILE INFORMATION WHEN SUCCESFULLY LOGGED INTO OAUTH
function LoginScreen(props) {
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: iosClientId,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log(
          'LOGINSCREEN.JS > GOOGLE OAUTH > RESULT.USER | ',
          result.user
        );
        props.navigation.navigate('Atlas', {
          username: result.user.givenName,
        }); //after Google login redirect to Atlas
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen Error | Error with login', e);
      return { error: true };
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/login-screen-background.png')}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/orion-archive-logo.png')}
          resizeMode="contain"
        />
        <TouchableHighlight onPress={signInWithGoogle}>
          <Image
            style={styles.signin}
            source={require('../assets/google-oauth-signin.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '105%',
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
  },
  logoContainer: {
    alignItems: 'center',
  },
  signin: {
    top: -50,
    width: 250,
  },
  title: {
    fontSize: 35,
  },
});

export default LoginScreen;
