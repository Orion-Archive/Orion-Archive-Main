import React from 'react';
import { IOS_CLIENT_ID } from '@env';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
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
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          width: 200,
          height: 180,
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/e/e0/Orion_logo.png',
        }}
      />
      <Text style={styles.title}>Orion Archive</Text>
      <Text style={styles.signin}>Sign In</Text>
      <TouchableHighlight onPress={signInWithGoogle}>
        <Image
          source={{
            width: 382,
            height: 92,
            uri:
              'https://github.com/react-native-google-signin/google-signin/blob/master/img/signin-button.png?raw=true',
          }}
        />
      </TouchableHighlight>
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
