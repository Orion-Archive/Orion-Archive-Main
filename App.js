import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  // TEXT ONPRESS HANDLER EXAMPLE
  const handlePress = () => {
    console.log('Text Pressed!');
  };

  return (
    // VIEW: ACTS LIKE A DIV
    // VIEW -> SAFEAREAVIEW: MAKES SURE THAT THE IPHONE TOP NOTCH DOESN'T COVER OUR CONTENT
    <View style={styles.container}>
      <Text onPress={handlePress}>Welcome to Orion Archives</Text>
      {/* TOUCHABLE TAGS OFFER DIFFERENT USER FEEDBACK WHEN INTERACTING WITH ELEMENTS */}
      <TouchableHighlight onPress={() => console.log('Image Tapped!')}>
        {/* Sourced Images from Repo Assets Folder */}
        {/* <Image source={require('./assets/icon.png')} /> */}
        {/* Sourced Images from the Interwebs: Width & Height Properties Required */}
        <Image
          source={{
            width: 400,
            height: 752,
            uri:
              'https://www.clipartkey.com/mpngs/m/117-1174303_orion-the-hunter-drawing-orion-drawings-illustration-orion.png',
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
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
});
